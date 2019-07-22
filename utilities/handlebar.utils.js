import Hbs from 'handlebars';
import _ from 'lodash';

Hbs.registerHelper('removeAllSpaces', text => {
  return text.replace(/\s/g, '');
});

Hbs.registerHelper('upperCase', text => {
  return text.toUpperCase();
});

Hbs.registerHelper('lowerCase', text => {
  return text.toLowerCase();
});

const generateHandlebar = (wrapper, data) => {
  console.log(data);
  const template = Hbs.compile(wrapper);
  return template(_.merge({}, _.omitBy(data, _.isEmpty || _.isNil)));
};

export default {
  generateHandlebar
};
