import fs, { constants } from 'fs';

const checkFileExist = async file =>
  await new Promise((resolve, reject) => {
    fs.access(file, constants.F_OK | constants.W_OK, err => {
      err ? reject(err) : resolve(true);
    });
  });

const readFile = async file =>
  await new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, fileData) => {
      err ? reject(err) : resolve(fileData);
    });
  });

const writeFile = async (file, data) => {
  await new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      err ? reject(err) : resolve(file);
    });
  });
};

export default {
  checkFileExist,
  readFile,
  writeFile
};
