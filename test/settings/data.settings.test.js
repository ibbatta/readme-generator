import dataSettings from '../../src/settings/data.settings';

const packagejsonFilterData = [
  'name',
  'version',
  'description',
  'repository',
  'author',
  'engines',
  'dependencies',
  'contributors'
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

test('check if packageJsonFilterData exists and is not empty', () => {
  expect(dataSettings.packageJsonFilterData).not.toBeNull();
  expect(dataSettings.packageJsonFilterData).not.toBeUndefined();
  expect(dataSettings.packageJsonFilterData.length).toBeGreaterThan(0);
});

test('check if packageJsonFilterData contain all right values', () => {
  expect(dataSettings.packageJsonFilterData).toEqual(
    expect.arrayContaining(packagejsonFilterData)
  );
});

test('check if fallbackQuestionData exists and is not empty', () => {
  expect(dataSettings.fallbackQuestionData).not.toBeNull();
  expect(dataSettings.fallbackQuestionData).not.toBeUndefined();
  expect(dataSettings.fallbackQuestionData.length).toBeGreaterThan(0);
});

test('check if fallbackQuestionData contain all right values', () => {
  expect(dataSettings.fallbackQuestionData).toEqual(
    expect.arrayContaining(fallbackQuestionData)
  );
});
