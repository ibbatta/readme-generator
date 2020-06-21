import { colorSettings } from './settings';

const RunGenerator = (argv, readmeSpinner) => {
  setTimeout(() => {
    readmeSpinner.succeed(colorSettings.success('Finish!'));
    console.log('----------------', argv);
  }, 1500);
};

export default RunGenerator;
