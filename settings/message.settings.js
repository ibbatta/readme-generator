import { sprintf as Sprf } from 'sprintf-js';
import Chalk from 'chalk';
import Figlet from 'figlet';
import Boxen from 'boxen';

const Log = showData => console.log(showData);

const labels = {
  mainTitle: '%s',
  questionTitle: '%s',
  readFileError: 'ERROR: The %s file is missing or not readable',
  writeFileError: 'ERROR: Unable to generate the %s file',
  writeFileSuccess: 'The %s file is generated with success'
};

const mainTitle = data => {
  Log(Chalk.greenBright(Figlet.textSync(Sprf(labels.mainTitle, data))));
};

const questionTitle = data => {
  Log(Chalk.blueBright(Sprf(labels.questionTitle, data)));
};

const readFileError = data => {
  Log(Chalk.red(Sprf(labels.readFileError, Chalk.bold.underline(data))));
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

const writeFileError = data => {
  Log(Chalk.red(Sprf(labels.writeFileError, Chalk.bold.underline(data))));
};

export default {
  mainTitle,
  questionTitle,
  readFileError,
  writeFileSuccess,
  writeFileError
};
