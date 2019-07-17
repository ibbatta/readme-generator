#!/usr/bin/env node

import Inquirer from 'inquirer';
import _ from 'lodash';

import { fileSettings, dataSettings, messageSettings } from './settings';
import { fileUtils, hbsUtils } from './utilities';
import questions from './readme/questions';

const inputFile = `${fileSettings.package.name}.${fileSettings.package.ext}`;
const outputFile = `${fileSettings.readme.name}.${fileSettings.readme.ext}`;

// TODO: fare un loop per richiamare le domande e gestire un "promise all"
const readmeQuestions = () => {
  messageSettings.questionTitle('Extra questions');
  return Inquirer.prompt(questions);
};

const checkFormatterFiles = async fileArray => {
  const check = [];
  await Promise.all(
    fileArray.map(async file => {
      await fileUtils
        .checkFileExist(file.path)
        .then(res => {
          check.push({ [file.name]: res });
        })
        .catch(() => {
          check.push({ [file.name]: false });
        });
    })
  );

  return { formatters: check };
};

const run = async () => {
  messageSettings.mainTitle('Readme\nGenerator');
  try {
    await fileUtils.checkFileExist(fileSettings.package.path);
  } catch (error) {
    throw new Error(messageSettings.readFileError(inputFile));
  }

  const templateFile = await fileUtils.readFile(fileSettings.template.path);
  const templateData = _.merge(
    {},
    _.pick(
      JSON.parse(await fileUtils.readFile(fileSettings.package.path)),
      dataSettings
    ),
    await readmeQuestions(),
    await checkFormatterFiles(fileSettings.formatters)
  );

  try {
    await fileUtils.writeFile(
      fileSettings.readme.path,
      hbsUtils.generateHandlebar(templateFile, templateData)
    );
    messageSettings.writeFileSuccess(outputFile);
  } catch (error) {
    throw new Error(messageSettings.writeFileError(outputFile));
  }
};

run();
