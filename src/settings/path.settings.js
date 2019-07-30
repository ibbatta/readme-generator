import path from 'path';

const basePath = {
  root: path.resolve(process.cwd()),
  github: path.resolve(process.cwd(), './.github'),
  readme: {
    questions: path.resolve(__dirname, '../../src/readme/questions'),
    assets: path.resolve(__dirname, '../../src/readme/assets'),
    templates: path.resolve(__dirname, '../../src/readme/templates'),
    hbsPartials: path.resolve(__dirname, '../../src/readme/templates/partials')
  }
};

export default basePath;
