import fs, { constants } from 'fs';

const checkExist = target =>
  new Promise((resolve, reject) => {
    !target &&
      reject({
        success: false,
        error: new Error('Path must be specified')
      });
    fs.access(target, constants.F_OK | constants.W_OK, error => {
      error ? reject({ success: false, error }) : resolve({ success: true });
    });
  });

const readDirectoryFiles = directory =>
  new Promise((resolve, reject) => {
    !directory &&
      reject({
        success: false,
        error: new Error('Directory must be specified')
      });
    fs.readdir(directory, (error, files) => {
      error
        ? reject({ success: false, error })
        : resolve({ success: true, data: { directory, files } });
    });
  });

const readFile = file =>
  new Promise((resolve, reject) => {
    !file &&
      reject({
        success: false,
        error: new Error('File must be specified')
      });
    fs.readFile(file, 'utf8', (error, fileData) => {
      error
        ? reject({ success: false, error })
        : resolve({ success: true, data: { file: fileData } });
    });
  });

const writeFile = (file, data) => {
  new Promise((resolve, reject) => {
    !file &&
      reject({
        success: false,
        error: new Error('File must be specified')
      });

    !data &&
      reject({
        success: false,
        error: new Error('Data must be specified')
      });

    fs.writeFile(file, data, error => {
      error
        ? reject({ success: false, error })
        : resolve({
            success: true,
            data: { file }
          });
    });
  });
};

export default {
  checkExist,
  readDirectoryFiles,
  readFile,
  writeFile
};
