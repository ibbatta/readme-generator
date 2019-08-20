const _ = require('lodash');

const injectQuestion = (question, bulkQuestions = []) => {
  let exist = false;

  if (_.isNil(question.name) || _.isEmpty(question.name))
    throw new Error('Question name must be specified');

  if (!_.isNil(bulkQuestions) && !_.isEmpty(bulkQuestions)) {
    bulkQuestions.map((existingQuestion, index) => {
      if (existingQuestion.name === question.name) {
        exist = true;
        bulkQuestions[index] = _.assign({}, existingQuestion, question);
      }
    });
  }

  return exist ? bulkQuestions : [_.merge({}, question)];
};

export default {
  injectQuestion
};
