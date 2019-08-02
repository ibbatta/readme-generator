import path from 'path';
const inquirer = require('inquirer');
const _ = require('lodash');

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
  const { directory, files } = await fileUtils.readDirectoryFiles(partialsPath);
  await files.forEach(async file => {
    const partialName = file.split('.')[0];
    fileUtils.readFile(path.join(directory, file)).then(partialContent => {
      hbsUtils.registerPartial(partialName, partialContent);
    });
  });
};

const checkFormatterFiles = async fileArray => {
  const formatters = [];
  await Promise.all(
    fileArray.map(async file => {
      await fileUtils
        .checkExist(file.path)
        .then(() => {
          formatters.push(file.name);
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
      .then(res => {
        return res;
      })
      .catch(() => {
        return false;
      })
  );
  return supports;
};

const parseQuestions = async questionsPath => {
  const bulkQuestions = [];
  const extraQuestions = [];
  const { directory, files } = await fileUtils.readDirectoryFiles(
    questionsPath
  );

  const formatters = await checkFormatterFiles(fileSettings.formatters);
  const supports = await checkSupportFile(
    await fileUtils
      .checkExist(pathSettings.github)
      .then(() => path.join(pathSettings.github, supportFile))
      .catch(() => path.join(pathSettings.root, supportFile))
  );

  const hasFormatters = !_.isNil(formatters) && !_.isEmpty(formatters);
  const hasSupports = !_.isNil(supports) && !_.isEmpty(supports);

  files.forEach(file => {
    bulkQuestions.push(...require(path.join(directory, file)));
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

const Run = async ({ output, template, debug }) => {
  messageSettings.mainTitle('Readme\nGenerator');

  let templateFile, templateData;

  const showDebugLog = !_.isNil(debug);
  const outputFile = _.isNil(output) ? readmeFile : output;
  const templatePath = _.isNil(template)
    ? path.resolve(__dirname, fileSettings.template.path)
    : path.resolve(pathSettings.root, template);

  /** CHECK IF PACKAGE.JSON EXISTS
   *
   */
  try {
    await fileUtils.checkExist(fileSettings.package.path);
  } catch (error) {
    throw new Error(messageSettings.readFileError(packageFile, error));
  }

  /** REGISTER ALL HANDLEBAR PARTIALS FOUND INSIDE THE FOLDER ./src/readme/templates/partials
   *
   */
  try {
    await registerHbsPartials(partialDir);
  } catch (error) {
    throw new Error(messageSettings.genericError(error));
  }

  /** READ HANDLEBAR TEMPLATE FILE
   *
   */

  try {
    templateFile = await fileUtils.readFile(templatePath);
  } catch (error) {
    throw new Error(messageSettings.readFileError(templatePath, error));
  }

  /** MERGE COLLECTED DATA FROM QUESTIONS AND PACKAGE.JSON
   *  CREATE THE COLLECTION TO POPULATE HANDLEBAR TEMPLATE
   */
  try {
    templateData = _.merge(
      {},
      _.pick(
        JSON.parse(await fileUtils.readFile(fileSettings.package.path)),
        dataSettings
      ),
      await parseQuestions(questionDir)
    );
  } catch (error) {
    throw new Error(messageSettings.genericError(error));
  }

  /** PARSE AND GENERATE THE HANDLEBAR TEMPLATE
   *  WRITE THE README.MD FILE
   */
  try {
    await fileUtils.writeFile(
      path.resolve(pathSettings.root, outputFile),
      hbsUtils.generateHandlebar(templateFile, templateData, showDebugLog)
    );
    messageSettings.writeFileSuccess(outputFile);
  } catch (error) {
    throw new Error(messageSettings.writeFileError(outputFile, error));
  }
};

export default Run;
