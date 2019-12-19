const packageJsonFilterData = [
  'name',
  'version',
  'description',
  'repository',
  'author',
  'engines',
  'dependencies',
  'contributors',
  'readmeGenerator'
];

const fallbackQuestionData = [
  {
    name: 'name',
    type: 'input',
    message: 'What is the name of the project?',
    default: 'Amazing title'
  },
  {
    name: 'version',
    type: 'input',
    message: 'What is the version?',
    default: '0.1.0'
  },
  {
    name: 'description',
    type: 'input',
    message: 'Describe your project'
  },
  {
    name: 'repository.url',
    type: 'input',
    message: "Insert the url of your project's repository"
  },
  {
    name: 'author.name',
    type: 'input',
    message: 'Insert the author name'
  }
];

export default {
  packageJsonFilterData,
  fallbackQuestionData
};
