import path from 'path';
const _ = require('lodash');
const inquirer = require('inquirer');

import {
  fileSettings,
  dataSettings,
  pathSettings,
  messageSettings
} from './settings';
import { fileUtils, questionUtils, hbsUtils, systemUtils } from './utilities';

const partialDir = path.resolve(__dirname, pathSettings.readme.hbsPartials);
const questionDir = path.resolve(__dirname, pathSettings.readme.questions);

const readmeFile = `${fileSettings.readme.name}.${fileSettings.readme.ext}`;
const supportFile = `${fileSettings.support.name}.${fileSettings.support.ext}`;

const parseQuestions = async questionsPath => {
  const bulkQuestions = [];
  const extraQuestions = [];
  const { data } = await fileUtils.readDirectoryFiles(questionsPath);
  const formatters = await systemUtils.checkFormatters(fileSettings.formatters);
  const supports = await systemUtils.checkSupports(
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

  messageSettings.questionTitle('\nJust few questions');
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

  /** REGISTER ALL HANDLEBAR PARTIALS FOUND INSIDE THE FOLDER ./src/readme/templates/partials
   *
   */
  try {
    await systemUtils.registerHbsPartials(partialDir);
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

  let pickedData;
  try {
    await fileUtils.checkExist(entryFile);
    const { data } = await fileUtils.readFile(entryFile);
    pickedData = _.pick(
      JSON.parse(data.file),
      dataSettings.packageJsonFilterData
    );
  } catch (error) {
    messageSettings.questionTitle('\nMain questions');
    pickedData = await inquirer.prompt(dataSettings.fallbackQuestionData);
  }

  /** MERGE COLLECTED DATA FROM QUESTIONS AND PACKAGE.JSON
   *  CREATE THE COLLECTION TO POPULATE HANDLEBAR TEMPLATE
   */
  try {
    buildTemplate.data = _.merge(
      {},
      pickedData,
      await parseQuestions(questionDir)
    );
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
