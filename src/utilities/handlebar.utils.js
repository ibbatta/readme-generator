import Hbs from 'handlebars';

Hbs.registerHelper('removeAllSpaces', text => {
  return text.replace(/\s/g, '');
});

Hbs.registerHelper('uppercase', text => {
  return text.toUpperCase();
});

Hbs.registerHelper('lowercase', text => {
  return text.toLowerCase();
});

Hbs.registerHelper('capitalize', text => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
});

Hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

Hbs.registerHelper('ifEquals', (a, b, options) => {
  if (a === b) {
    return options.fn(this);
  }

  return options.inverse(this);
});

const registerPartial = (name, partialTemplate) => {
  Hbs.registerPartial(name, partialTemplate);
};

const generateHandlebar = (wrapper, data) => {
  console.log(data); //TODO: delete this
  const template = Hbs.compile(wrapper);
  return template(data);
};

export default {
  registerPartial,
  generateHandlebar
};
