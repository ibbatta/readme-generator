import fs from 'fs';

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

export default {
  accessFilePromise,
  readFilePromise
};
