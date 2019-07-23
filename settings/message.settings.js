import { sprintf as Sprf } from 'sprintf-js';
import Chalk from 'chalk';
import Figlet from 'figlet';
import Boxen from 'boxen';

const Log = showData => console.log(showData);

const labels = {
    mainTitle: '%s',
    questionTitle: '%s',
    genericError: '%j',
    readFileError: 'ERROR: The %s file is missing or not readable.\n%j',
    writeFileError: 'ERROR: Unable to generate the %s file.\n%j',
    writeFileSuccess: 'The %s file is generated with success'
};

const mainTitle = data => {
    Log(Chalk.greenBright(Figlet.textSync(Sprf(labels.mainTitle, data))));
};

const questionTitle = data => {
    Log(Chalk.blueBright(Sprf(labels.questionTitle, data)));
};

const genericError = error => {
    Log(Chalk.red(Sprf(labels.genericError, error)));
};

const readFileError = (data, error) => {
    Log(Chalk.red(Sprf(labels.readFileError, Chalk.bold.underline(data), error)));
};

const writeFileError = (data, error) => {
    Log(
        Chalk.red(Sprf(labels.writeFileError, Chalk.bold.underline(data), error))
    );
};

const writeFileSuccess = data => {
    Log(
        Chalk.green(
            Boxen(Sprf(labels.writeFileSuccess, Chalk.bold.underline(data)), {
                padding: 1,
                margin: 1,
                borderStyle: 'classic'
            })
        )
    );
};

export default {
    mainTitle,
    questionTitle,
    genericError,
    readFileError,
    writeFileSuccess,
    writeFileError
};
