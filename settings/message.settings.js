import Chalk from 'chalk'

const printLog = (content) => console.log(content);
const printErr = (content) => console.error(content);

const projectTitle = (message) => {
    printLog(Chalk.green(message))
}

const questionTitle = (message) => {
    printLog(Chalk.blueBright(message));
}

const missingFile = (message) => {
    printErr(Chalk.red(message));
}

export default {
    questionTitle,
    projectTitle,
    missingFile
}
