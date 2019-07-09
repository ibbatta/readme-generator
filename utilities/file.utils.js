import fs from 'fs';
import Handlebar from 'handlebars';

import { constantSettings } from '../settings';

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
  const template = Handlebar.compile(wrapper);
  return template(...answers);
};

export default {
  accessFilePromise,
  readFilePromise,
  writeFilePromise,
  convertHandlebarTemplate
};
