import questionUtils from './question.utils';

test('check if fileUtils exists and is not empty', () => {
  expect(questionUtils).not.toBeNull();
  expect(questionUtils).not.toBeUndefined();
  expect(Object.keys(questionUtils).length).toBeGreaterThan(0);
});

test('throw error if question name is missing', () => {
  const updateQuestion = {
    message: 'Test message'
  };
  try {
    questionUtils.injectQuestion(updateQuestion);
  } catch (error) {
    expect(error).toEqual(new Error('Question name must be specified'));
  }
});

test("check if update correctly the question's bulk", () => {
  const bulk = [
    {
      name: 'commands.start',
      type: 'input',
      message: 'What is the command to run the project?',
      default: 'start'
    }
  ];

  const updateQuestion = {
    name: 'commands.start',
    message: 'Test message'
  };

  const data = questionUtils.injectQuestion(updateQuestion, bulk);
  expect(data[0]).toEqual({
    name: 'commands.start',
    type: 'input',
    message: 'Test message',
    default: 'start'
  });
});

test("check if create correctly the question's bulk", () => {
  const createQuestion = {
    name: 'commands.start',
    type: 'input',
    message: 'What is the command to run the project?',
    default: 'start'
  };

  const data = questionUtils.injectQuestion(createQuestion);
  expect(data[0]).toEqual(createQuestion);
});
