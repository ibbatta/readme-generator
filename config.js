import path from 'path';

import { pathSettings, fileSettings } from './settings';

export default {
  packageJsonFile: path.join(
    pathSettings.root,
    `${fileSettings.package.name}.${fileSettings.package.ext}`
  ),
  readmeMdFile: path.join(
    pathSettings.root,
    `${fileSettings.readme.name}.${fileSettings.readme.ext}`
  ),
  readmeMdTemplate: path.join(
    pathSettings.templates,
    `${fileSettings.template.name}.${fileSettings.template.ext}`
  )
};
