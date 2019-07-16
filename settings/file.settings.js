import path from 'path';
import pathSettings from './path.settings';

const settings = {
  template: {
    name: 'README',
    ext: 'hbs'
  },
  readme: {
    name: 'TEST-README',
    ext: 'md'
  },
  package: {
    name: 'package',
    ext: 'json'
  },
  formatters: [
    { name: 'eslint', ext: 'rc' },
    { name: 'jsbeautify', ext: 'rc' },
    { name: 'editorconfig', ext: null },
    { name: 'prettier', ext: 'rc' }
  ],
  manager: [{ ext: 'lock' }]
};

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

settings.formatters.forEach((val, index) => {
  settings.formatters[index].path = path.join(
    pathSettings.root,
    `.${val.name}${val.ext ? val.ext : ''}`
  );
});

console.log('---', settings);

export default settings;
