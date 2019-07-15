#!/usr/bin/env node

import Chalk from 'chalk';
import Boxen from 'boxen';
import Figlet from 'figlet';
import Inquirer from 'inquirer';
import _ from 'lodash';

import { fileSettings, dataSettings, messageSettings } from './settings';
import { fileUtils, hbsUtils } from './utilities';
import questions from './readme/questions';

// TODO: fare un loop per richiamare le domande e gestire un "promise all"
const readmeQuestions = () => {
    console.log(Chalk.blueBright('Extra questions'));
    return Inquirer.prompt(questions);
};

const run = async () => {
    messageSettings.projectTitle(Figlet.textSync('Readme\nGenerator'))
    try {
        await fileUtils.checkFileExist(fileSettings.package.path);
    } catch (error) {
        const fileMissing = `${fileSettings.package.name}.${fileSettings.package.ext}`
        const errorMessage = `ERROR: The file ${Chalk.bold(fileMissing)} is missing or not readable`
        throw new Error(messageSettings.missingFile(errorMessage))
    }

    const templateFile = await fileUtils.readFile(fileSettings.template.path);
    const templateData = _.merge({},
        _.pick(
            JSON.parse(await fileUtils.readFile(fileSettings.package.path)),
            dataSettings
        ),
        await readmeQuestions()
    );

    try {
        await fileUtils.writeFile(
            fileSettings.readme.path,
            hbsUtils.generateHandlebar(templateFile, templateData)
        );
        console.log(
            Chalk.green(
                Boxen(
                    `${Chalk.yellowBright.bold(
            fileSettings.readme.name
          )} generated with success`, {
                        padding: 1,
                        margin: 1,
                        borderStyle: 'classic'
                    }
                )
            )
        );
    } catch (error) {
        throw new Error(
            Chalk.red(
                `Unable to generate the ${Chalk.bold(fileSettings.package.path)} file`
            )
        );
    }
};

run();
