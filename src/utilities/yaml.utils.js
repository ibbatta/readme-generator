const yaml = require('js-yaml');
const _ = require('lodash');

const parseData = content => {
  return new Promise((resolve, reject) => {
    try {
      resolve(_.omitBy(yaml.safeLoad(content), _.isNil));
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  parseData
};
