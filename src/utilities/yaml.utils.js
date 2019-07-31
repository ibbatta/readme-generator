import _ from 'lodash';
import Yaml from 'js-yaml';

const parseData = content => {
  return new Promise((resolve, reject) => {
    try {
      resolve(_.omitBy(Yaml.safeLoad(content), _.isNil));
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  parseData
};
