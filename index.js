#!/usr/bin/env node

import Chalk from 'chalk';
import Boxen from 'boxen';
import Figlet from 'figlet';
import Inquirer from 'inquirer';

import config from './config';
import { fileSettings } from './settings';
import { collectionUtils, fileUtils } from './utilities';
import { extraQuestions } from './questions';

let packageAnswers, extraAnwsers;

const extraFnQuestions = () => {
  console.log(Chalk.blueBright('Extra questions'));
  return Inquirer.prompt(extraQuestions);
};

const run = async () => {
  console.log(Chalk.green(Figlet.textSync('Readme\nGenerator')));

  const packageJsonExist = await fileUtils.accessFilePromise(
    config.packageJsonFile
  );
  const packageJsonData = await fileUtils.readFilePromise(
    config.packageJsonFile
  );

  const readmeMdTemplate = await fileUtils.readFilePromise(
    config.readmeMdTemplate
  );

  const packageJsonStorage = packageJsonExist
    ? collectionUtils.filterCollectionByCostantValues(packageJsonData)
    : null;

  if (packageJsonStorage) {
    packageAnswers = packageJsonStorage;
  } else {
    throw new Error(
      `The file ${Chalk.bold(
        config.packageJsonFile
      )} is missing or not readable`
    );
  }
  extraAnwsers = await extraFnQuestions();

  const templateConverted = fileUtils.convertHandlebarTemplate(
    readmeMdTemplate,
    packageAnswers,
    extraAnwsers
  );

  try {
    await fileUtils.writeFilePromise(config.readmeMdFile, templateConverted);
    console.log(
      Chalk.green(
        Boxen(
          `${Chalk.yellowBright.bold(
            fileSettings.readme.name
          )} generated with success`,
          {
            padding: 1,
            margin: 1,
            borderStyle: 'classic'
          }
        )
      )
    );
  } catch (error) {
    console.error(Chalk.red(error));
  }
};

run();
