import _ from 'lodash';

const injectChoices = (name, questionsBulk, choices) => {
  questionsBulk.forEach(question => {
    if (question.name === name) {
      if (_.isNil(question.choices)) question.choices = [];
      if (_.isNil(question.default)) question.default = [];

      question.choices.push(...choices);
      _.isEmpty(question.default) && question.default.push(...choices);
    }
  });
  return questionsBulk;
};

export default {
  injectChoices
};
