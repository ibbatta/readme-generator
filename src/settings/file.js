import path from 'path';
import pathSettings from './path';

const settings = {
  package: {
    name: 'package',
    ext: 'json'
  },
  template: {
    name: 'README',
    ext: 'hbs'
  },
  readme: {
    name: 'README',
    ext: 'md'
  },
  support: {
    name: 'FUNDING',
    ext: 'yml'
  },
  formatters: [
    { name: 'eslint', ext: 'rc' },
    { name: 'jsbeautify', ext: 'rc' },
    { name: 'editorconfig', ext: null },
    { name: 'prettier', ext: 'rc' }
  ]
};

settings.package.path = path.join(
  pathSettings.root,
  `${settings.package.name}.${settings.package.ext}`
);

settings.template.path = path.join(
  pathSettings.readme.templates,
  `${settings.template.name}.${settings.template.ext}`
);

settings.formatters.forEach((val, index) => {
  settings.formatters[index].path = path.join(
    pathSettings.root,
    `.${val.name}${val.ext ? val.ext : ''}`
  );
});

export default settings;
