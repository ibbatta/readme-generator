import _ from 'lodash';

const injectChoices = ({ name, questionsBulk, choices = [], checkType = "checkbox", setDefaults = false }) => {
    questionsBulk.forEach(question => {
        if (question.name === name && question.type === checkType) {
            if (_.isNil(question.choices)) question.choices = [];
            if (_.isNil(question.default)) question.default = [];

            question.choices.push(...choices);
            setDefaults && _.isEmpty(question.default) && question.default.push(...choices);
        }
    });
    return questionsBulk;
};

export default {
    injectChoices
};
