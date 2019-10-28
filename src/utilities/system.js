import path from 'path';
import fileUtils from './file';
import hbsUtils from './handlebar';
import yamlUtils from './yaml';

const registerHbsPartials = async partialsPath => {
  const { data } = await fileUtils.readDirectoryFiles(partialsPath);
  await data.files.forEach(async file => {
    const partialName = file.split('.')[0];
    fileUtils.readFile(path.join(data.directory, file)).then(partialContent => {
      const { data } = partialContent;
      hbsUtils.registerPartial(partialName, data.file);
    });
  });
};

const checkFormatters = async fileArray => {
  const formatters = [];
  await Promise.all(
    fileArray.map(async file => {
      await fileUtils
        .checkExist(file.path)
        .then(({ success }) => {
          success && formatters.push(file.name);
        })
        .catch(() => null);
    })
  );

  return formatters;
};

const checkSupports = async supportFile => {
  const supports = await yamlUtils.parseData(
    await fileUtils
      .readFile(supportFile)
      .then(({ success, data }) => {
        return success && data.file;
      })
      .catch(() => null)
  );
  return supports;
};

export default {
  registerHbsPartials,
  checkFormatters,
  checkSupports
};
