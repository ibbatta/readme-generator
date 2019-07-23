const injectChoices = (checkName, questionsBulk, choices) => {
  questionsBulk.forEach(question => {
    if (question.name === checkName) {
      question.choices.push(...choices);
    }
  });
  return questionsBulk;
};

export default {
  injectChoices
};
