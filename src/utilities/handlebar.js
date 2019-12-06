const hbs = require('handlebars');
const _ = require('lodash');

import { messageSettings } from '../settings';

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
  if (!name) throw new Error('Template name must be specified');
  if (!partialTemplate) throw new Error('Partial data must be specified');
  hbs.registerPartial(name, partialTemplate);
};

const generateHandlebar = (wrapper, data, debug = false) => {
  for (let key of Object.keys(data)) {
    if (
      (_.isObject(data[key]) || _.isArray(data[key])) &&
      _.isEmpty(data[key])
    ) {
      data[key] = null;
    }
  }
  const template = hbs.compile(wrapper);
  debug && messageSettings.debugMessage(data);
  return template(data);
};

export default {
  registerPartial,
  generateHandlebar
};
