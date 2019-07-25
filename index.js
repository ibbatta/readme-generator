#!/usr/bin/env node

import path from 'path';
import Inquirer from 'inquirer';
import _ from 'lodash';

import {
    fileSettings,
    dataSettings,
    pathSettings,
    messageSettings
} from './src/settings';
import {
    fileUtils,
    questionUtils,
    hbsUtils,
    yamlUtils
} from './src/utilities';

const inputFile = `${fileSettings.package.name}.${fileSettings.package.ext}`;
const outputFile = `${fileSettings.readme.name}.${fileSettings.readme.ext}`;
const supportFile = `${fileSettings.support.name}.${fileSettings.support.ext}`

const registerHbsPartials = async partialsPath => {
    const { directory, files } = await fileUtils.readDirectoryFiles(partialsPath);
    await files.forEach(async file => {
        const partialName = file.split(".")[0];
        fileUtils
            .readFile(path.join(directory, file))
            .then(partialContent => {
                hbsUtils.registerPartial(partialName, partialContent)
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

const checkSupportFile = async (supportFile) => {
    const supports = await yamlUtils.parseData(
        await fileUtils.readFile(supportFile)
        .then(res => {
            return res
        }).catch(() => {
            return false
        })
    )
    return supports
};


const parseQuestions = async questionsPath => {
    const questionsBulk = [];
    const questions = [];
    const { directory, files } = await fileUtils.readDirectoryFiles(
        questionsPath
    );

    const formatters = await checkFormatterFiles(fileSettings.formatters);
    const supports = await checkSupportFile(await fileUtils.checkExist(pathSettings.github) ? path.join(pathSettings.github, supportFile) : path.join(pathSettings.root, supportFile))

    files.forEach(file => {
        questionsBulk.push(...require(path.join(directory, file)).default)
    })

    questions.push(
        questionUtils.injectQuestionsData({
            questions: questionsBulk,
            name: 'formatters',
            param: 'choices',
            data: formatters
        }, formatters),
        questionUtils.injectQuestionsData({
            questions: questionsBulk,
            name: "support"
        }, !_.isNil(supports.patreon)),
        questionUtils.injectQuestionsData({
            questions: questionsBulk,
            name: "support.patreon"
        }, !_.isNil(supports.patreon) && supports.patreon)
    );

    messageSettings.questionTitle('Extra questions');
    return Inquirer.prompt(...questions);
};

const run = async () => {
    messageSettings.mainTitle('Readme\nGenerator');

    try {
        await fileUtils.checkExist(fileSettings.package.path);
    } catch (error) {
        throw new Error(messageSettings.readFileError(inputFile, error));
    }

    try {
        await registerHbsPartials(pathSettings.readme.hbsPartials);
    } catch (error) {
        throw new Error(messageSettings.genericError(error));
    }

    const templateFile = await fileUtils.readFile(fileSettings.template.path);
    const templateData = _.merge({},
        _.pick(
            JSON.parse(await fileUtils.readFile(fileSettings.package.path)),
            dataSettings
        ),
        await parseQuestions(pathSettings.readme.questions)
    );

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

run();
