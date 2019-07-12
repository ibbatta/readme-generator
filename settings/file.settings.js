import path from 'path';
import _ from 'lodash';

import pathSettings from './path.settings';
import config from '../config';

const defaultSettings = {
  template: {
    name: 'README',
    ext: 'hbs'
  },
  readme: {
    name: 'README',
    ext: 'md'
  },
  package: {
    name: 'package',
    ext: 'json'
  }
};

const settings = _.merge({}, defaultSettings, config.files);

settings.template.path = path.join(
  pathSettings.readme.templates,
  `${settings.template.name}.${settings.template.ext}`
);

settings.readme.path = path.join(
  pathSettings.root,
  `${settings.readme.name}.${settings.readme.ext}`
);

settings.package.path = path.join(
  pathSettings.root,
  `${settings.package.name}.${settings.package.ext}`
);

export default settings;
