import path from 'path';
const _ = require('lodash');
const inquirer = require('inquirer');

import {
  fileSettings,
  dataSettings,
  pathSettings,
  messageSettings
} from './settings';
import { fileUtils, questionUtils, hbsUtils, yamlUtils } from './utilities';

const partialDir = path.resolve(__dirname, pathSettings.readme.hbsPartials);
const questionDir = path.resolve(__dirname, pathSettings.readme.questions);

const packageFile = `${fileSettings.package.name}.${fileSettings.package.ext}`;
const readmeFile = `${fileSettings.readme.name}.${fileSettings.readme.ext}`;
const supportFile = `${fileSettings.support.name}.${fileSettings.support.ext}`;

const registerHbsPartials = async partialsPath => {
  const { data } = await fileUtils.readDirectoryFiles(partialsPath);
  await data.files.forEach(async file => {
    const partialName = file.split('.')[0];
    fileUtils.readFile(path.join(data.directory, file)).then(partialContent => {
      const { data } = partialContent;
      hbsUtils.registerPartial(partialName, data.file);
    });
  });
};

const checkFormatterFiles = async fileArray => {
  const formatters = [];
  await Promise.all(
    fileArray.map(async file => {
      await fileUtils
        .checkExist(file.path)
        .then(({ success }) => {
          success && formatters.push(file.name);
        })
        .catch(() => null);
    })
  );

  return formatters;
};

const checkSupportFile = async supportFile => {
  const supports = await yamlUtils.parseData(
    await fileUtils
      .readFile(supportFile)
      .then(({ success, data }) => {
        return success && data.file;
      })
      .catch(() => null)
  );
  return supports;
};

const parseQuestions = async questionsPath => {
  const bulkQuestions = [];
  const extraQuestions = [];
  const { data } = await fileUtils.readDirectoryFiles(questionsPath);

  const formatters = await checkFormatterFiles(fileSettings.formatters);
  const supports = await checkSupportFile(
    await fileUtils
      .checkExist(pathSettings.github)
      .then(() => path.join(pathSettings.github, supportFile))
      .catch(() => path.join(pathSettings.root, supportFile))
  );

  const hasFormatters = !_.isNil(formatters) && !_.isEmpty(formatters);
  const hasSupports = !_.isNil(supports) && !_.isEmpty(supports);

  data.files.forEach(file => {
    bulkQuestions.push(...require(path.join(data.directory, file)));
  });

  extraQuestions.push(
    hasFormatters &&
      questionUtils.injectQuestion(
        {
          name: 'formatters',
          type: 'checkbox',
          message: 'What kind of formatter / linter are you using?',
          choices: formatters,
          default: formatters
        },
        bulkQuestions
      ),

    hasSupports &&
      questionUtils.injectQuestion(
        {
          name: 'support',
          default: true
        },
        bulkQuestions
      ),

    hasSupports &&
      !_.isNil(supports.patreon) &&
      questionUtils.injectQuestion(
        {
          name: 'support.patreon',
          default: supports.patreon
        },
        bulkQuestions
      )
  );

  messageSettings.questionTitle('Just few questions');
  return inquirer.prompt(_.unionBy(bulkQuestions, ...extraQuestions, 'name'));
};

const Run = async ({ entry, output, template, debug }) => {
  messageSettings.mainTitle('Readme\nGenerator');

  const buildTemplate = {};

  let entryFile = _.isNil(entry)
    ? fileSettings.package.path
    : path.resolve(pathSettings.root, entry);
  const outputFile = _.isNil(output) ? readmeFile : output;
  const templatePath = _.isNil(template)
    ? path.resolve(__dirname, fileSettings.template.path)
    : path.resolve(pathSettings.root, template);
  const showDebugLog = !_.isNil(debug);

  /** IF ENTR FILE NOT EXIST CHECK FOR PACKAGE JSON, OTHERWISE ASK QUESTIONS
   *
   */
  // TODO: insert in parse questions
  try {
    await fileUtils.checkExist(entryFile);
  } catch (error) {
    const mainQuestions = [];
    mainQuestions.push(
      questionUtils.injectQuestion({
        name: 'name',
        type: 'input',
        message: 'What is the name of the project?'
      }),
      questionUtils.injectQuestion({
        name: 'version',
        type: 'input',
        message: 'What is the version?',
        default: '0.1.0'
      }),
      questionUtils.injectQuestion({
        name: 'description',
        type: 'input',
        message: 'Describe your project'
      }),
      questionUtils.injectQuestion({
        name: 'repository.url',
        type: 'input',
        message: "Insert the url of your project's repository"
      }),
      questionUtils.injectQuestion({
        name: 'author.name',
        type: 'input',
        message: 'Insert the author name'
      })
    );

    messageSettings.questionTitle('Main few questions');
    return inquirer.prompt(...mainQuestions);
  }

  /** REGISTER ALL HANDLEBAR PARTIALS FOUND INSIDE THE FOLDER ./src/readme/templates/partials
   *
   */
  try {
    await registerHbsPartials(partialDir);
  } catch ({ error }) {
    throw new Error(messageSettings.genericError(error));
  }

  /** READ HANDLEBAR TEMPLATE FILE
   *
   */

  try {
    const { data } = await fileUtils.readFile(templatePath);
    buildTemplate.file = data.file;
  } catch ({ error }) {
    throw new Error(messageSettings.readFileError(templatePath, error));
  }

  /** MERGE COLLECTED DATA FROM QUESTIONS AND PACKAGE.JSON
   *  CREATE THE COLLECTION TO POPULATE HANDLEBAR TEMPLATE
   */
  try {
    const { data } = await fileUtils.readFile(entryFile);
    const pickedData = _.pick(JSON.parse(data.file), dataSettings); // TODO: insert here the swap if package.json not exists
    const parseQuestion = await parseQuestions(questionDir);
    buildTemplate.data = _.merge({}, pickedData, parseQuestion);
  } catch ({ error }) {
    throw new Error(messageSettings.genericError(error));
  }

  /** PARSE AND GENERATE THE HANDLEBAR TEMPLATE
   *  WRITE THE README.MD FILE
   */
  try {
    const { file, data } = buildTemplate;
    const outputPath = path.resolve(pathSettings.root, outputFile);
    const hbsGenerated = hbsUtils.generateHandlebar(file, data, showDebugLog);
    await fileUtils.writeFile(outputPath, hbsGenerated);
    messageSettings.writeFileSuccess(outputFile);
  } catch ({ error }) {
    throw new Error(messageSettings.writeFileError(outputFile, error));
  }
};

export default Run;
