#!/usr/bin/env node

import path from 'path';
import inquirer from 'inquirer';
import _ from 'lodash';

import {
  fileSettings,
  dataSettings,
  pathSettings,
  messageSettings
} from './settings';
import { fileUtils, questionUtils, hbsUtils, yamlUtils } from './utilities';

const inputFile = `${fileSettings.package.name}.${fileSettings.package.ext}`;
const outputFile = `${fileSettings.readme.name}.${fileSettings.readme.ext}`;
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

  messageSettings.questionTitle('Just few more questions');
  return inquirer.prompt(_.unionBy(bulkQuestions, ...extraQuestions, 'name'));
};

const Run = async () => {
  messageSettings.mainTitle('Readme\nGenerator');

  /** CHECK IF PACKAGE.JSON EXISTS
   *
   */
  try {
    await fileUtils.checkExist(fileSettings.package.path);
  } catch (error) {
    throw new Error(messageSettings.readFileError(inputFile, error));
  }

  /** REGISTER ALL HANDLEBAR PARTIALS FOUND INSIDE THE FOLDER ./src/readme/templates/partials
   *
   */
  try {
    await registerHbsPartials(pathSettings.readme.hbsPartials);
  } catch (error) {
    throw new Error(messageSettings.genericError(error));
  }

  /** READ HANDLEBAR TEMPLATE FILE
   *  COLLECT DATA FROM PACKAGE.JSON AND QUESTION FILES
   */
  const templateFile = await fileUtils.readFile(fileSettings.template.path);
  const templateData = _.merge(
    {},
    _.pick(
      JSON.parse(await fileUtils.readFile(fileSettings.package.path)),
      dataSettings
    ),
    await parseQuestions(pathSettings.readme.questions)
  );

  /** PARSE AND GENERATE THE HANDLEBAR TEMPLATE
   *  WRITE THE README.MD FILE
   */
  try {
    await fileUtils.writeFile(
      fileSettings.readme.path,
      hbsUtils.generateHandlebar(templateFile, templateData)
    );
    messageSettings.writeFileSuccess(outputFile);
  } catch (error) {
    throw new Error(messageSettings.writeFileError(outputFile, error));
  }
};

Run();
