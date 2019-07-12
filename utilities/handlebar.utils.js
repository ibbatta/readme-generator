import _ from 'lodash';
import Handlebar from 'handlebars';

Handlebar.registerHelper('removeAllSpaces', text => {
  return text.replace(/\s/g, '');
});

Handlebar.registerHelper('upperCase', text => {
  return text.toUpperCase();
});

Handlebar.registerHelper('lowerCase', text => {
  return text.toLowerCase();
});

const generateHandlebar = (wrapper, ...answers) => {
  console.log(JSON.stringify(answers, null, 2));
  const template = Handlebar.compile(wrapper);
  return template(_.merge({}, ...answers));
};

export default {
  generateHandlebar
};
