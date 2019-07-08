import fs from 'fs'
import path from 'path'

import chalk from 'chalk';
import _ from 'lodash'

import { pathSettings, fileSettings, constantSettings } from './settings'
// import { parseUtils } from './utils' // TODO: refactor filtered json inside utils

// Manage files path
const packageFile = path.join(pathSettings.root, `${fileSettings.package.name}.${fileSettings.package.ext}`)
// const readmeFile = path.join(pathSettings.root, `${fileSettings.readme.name}.${fileSettings.readme.ext}`)

const packageJsonStoredData = []

// Check if package.json exists and if it's readable
// TODO: obtain async data and manage async requests
fs.access(packageFile, constantSettings.file.isExist | constantSettings.file.isReadable, (err) => {
    if (!err) {
        fs.readFile(packageFile, 'utf8', (err, fileData) => {
            // FIXME: refactor to better manage errors
            err ? console.error(err) : packageJsonStoredData.push({ ..._.pick(JSON.parse(fileData), constantSettings.packageFilterData) })
        });
    }
});

console.log(chalk.bgBlack.yellow("_ . • ° ^ WORK IN PROGRESS ^ ° • . _"))
