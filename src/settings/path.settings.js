import path from 'path';

const basePath = {
  root: path.resolve(process.cwd()),
  github: path.resolve(process.cwd(), './.github'),
  readme: {
    questions: path.resolve(process.cwd(), './src/readme/questions'),
    assets: path.resolve(process.cwd(), './src/readme/assets'),
    templates: path.resolve(process.cwd(), './src/readme/templates'),
    hbsPartials: path.resolve(process.cwd(), './src/readme/templates/partials')
  }
};

export default basePath;
