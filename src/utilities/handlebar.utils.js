const hbs = require('handlebars');
const _ = require('lodash');

hbs.registerHelper('removeAllSpaces', text => {
  return text.replace(/\s/g, '');
});

hbs.registerHelper('uppercase', text => {
  return text.toUpperCase();
});

hbs.registerHelper('lowercase', text => {
  return text.toLowerCase();
});

hbs.registerHelper('capitalize', text => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
});

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

const registerPartial = (name, partialTemplate) => {
  hbs.registerPartial(name, partialTemplate);
};

const generateHandlebar = (wrapper, data) => {
  for (let key of Object.keys(data)) {
    if (
      (_.isObject(data[key]) || _.isArray(data[key])) &&
      _.isEmpty(data[key])
    ) {
      data[key] = null;
    }
  }
  const template = hbs.compile(wrapper);
  console.log(data); //TODO: delete this
  return template(data);
};

export default {
  registerPartial,
  generateHandlebar
};
