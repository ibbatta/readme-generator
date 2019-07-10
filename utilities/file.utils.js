import fs from 'fs';
import _ from 'lodash';
import Handlebar from 'handlebars';

import { constantSettings } from '../settings';

Handlebar.registerHelper('removeAllSpaces', text => {
  return text.replace(/\s/g, '');
});

Handlebar.registerHelper('upperCase', text => {
  return text.toUpperCase();
});

Handlebar.registerHelper('lowerCase', text => {
  return text.toLowerCase();
});

const accessFilePromise = async file =>
  await new Promise((resolve, reject) => {
    fs.access(
      file,
      constantSettings.file.isExist | constantSettings.file.isReadable,
      err => {
        err ? reject(err) : resolve(true);
      }
    );
  });

const readFilePromise = async file =>
  await new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, fileData) => {
      err ? reject(err) : resolve(fileData);
    });
  });

const writeFilePromise = async (file, data) => {
  await new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      err ? reject(err) : resolve(file);
    });
  });
};

const convertHandlebarTemplate = (wrapper, ...answers) => {
  console.log(JSON.stringify(answers, null, 2));
  const template = Handlebar.compile(wrapper);
  return template(_.merge({}, ...answers));
};

export default {
  accessFilePromise,
  readFilePromise,
  writeFilePromise,
  convertHandlebarTemplate
};
