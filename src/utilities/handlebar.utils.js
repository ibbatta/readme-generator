const hbs = require('handlebars');

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

hbs.registerHelper('ifEquals', (a, b, options) => {
  if (a === b) {
    return options.fn(this);
  }

  return options.inverse(this);
});

const registerPartial = (name, partialTemplate) => {
  hbs.registerPartial(name, partialTemplate);
};

const generateHandlebar = (wrapper, data) => {
  console.log(data); //TODO: delete this
  const template = hbs.compile(wrapper);
  return template(data);
};

export default {
  registerPartial,
  generateHandlebar
};
