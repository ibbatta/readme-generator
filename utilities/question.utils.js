import _ from 'lodash';

const injectChoices = (checkName, questionsBulk, choices) => {
  questionsBulk.forEach(question => {
    if (question.name === checkName) {
      if (_.isNil(question.choices)) question.choices = [];
      if (_.isNil(question.default)) question.default = [];

      question.choices.push(...choices);
      question.default.push(...choices);
    }
  });
  return questionsBulk;
};

export default {
  injectChoices
};
