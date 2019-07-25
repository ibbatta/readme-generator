import _ from 'lodash';

const injectQuestionsData = ({ questions = [], name, param = null, data = null }, useDefault = false) => {
    questions.map(question => {
        if (question.name === name) {
            if (!_.isNil(param) && !_.isNil(param)) question[param] = data
            if (!_.isNil(useDefault)) question['default'] = useDefault
        }
    });
    return questions
};

export default {
    injectQuestionsData
};
