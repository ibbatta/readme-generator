import { sprintf as Sprf } from 'sprintf-js';
import chalk from 'chalk';
import figlet from 'figlet';
import boxen from 'boxen';

const { log, clear } = console;

const labels = {
  mainTitle: '%s',
  questionTitle: '%s',
  genericError: '%j',
  readFileError: 'ERROR: The %s file is missing or not readable.\n%j',
  writeFileError: 'ERROR: Unable to generate the %s file.\n%j',
  writeFileSuccess: 'The %s file is generated with success'
};

const mainTitle = data => {
  clear();
  log(chalk.greenBright(figlet.textSync(Sprf(labels.mainTitle, data))));
};

const questionTitle = data => {
  log(chalk.blueBright(Sprf(labels.questionTitle, data)));
};

const genericError = error => {
  log(chalk.red(Sprf(labels.genericError, error)));
};

const readFileError = (data, error) => {
  log(chalk.red(Sprf(labels.readFileError, chalk.bold.underline(data), error)));
};

const writeFileError = (data, error) => {
  log(
    chalk.red(Sprf(labels.writeFileError, chalk.bold.underline(data), error))
  );
};

const writeFileSuccess = data => {
  log(
    chalk.green(
      boxen(Sprf(labels.writeFileSuccess, chalk.bold.underline(data)), {
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
