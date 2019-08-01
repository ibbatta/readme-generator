import path from 'path';

const basePath = {
  root: path.resolve(process.cwd()),
  github: path.resolve(process.cwd(), '.github'),
  readme: {
    questions: 'readme/questions',
    templates: 'readme/templates',
    hbsPartials: 'readme/templates/partials'
  }
};

export default basePath;
