import fs, { constants } from 'fs';

const checkExist = (target) =>
    new Promise((resolve, reject) => {
        fs.access(target, constants.F_OK | constants.W_OK, err => {
            err ? reject(err) : resolve(true);
        });
    });

const readDirectoryFiles = directory =>
    new Promise((resolve, reject) => {
        fs.readdir(directory, (err, files) => {
            err ? reject(err) : resolve({ directory, files });
        });
    });

const readFile = file =>
    new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, fileData) => {
            err ? reject(err) : resolve(fileData);
        });
    });

const writeFile = (file, data) => {
    new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            err ? reject(err) : resolve(file);
        });
    });
};

export default {
    checkExist,
    readDirectoryFiles,
    readFile,
    writeFile
};
