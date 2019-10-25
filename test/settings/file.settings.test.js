import fileSettings from '../../src/settings/file.settings';

test('check if fileSettings exists and is not empty', () => {
  expect(fileSettings).not.toBeNull();
  expect(fileSettings).not.toBeUndefined();
  expect(Object.keys(fileSettings).length).toBeGreaterThan(0);
});

test('check if fileSettings has the right properties', () => {
  expect(fileSettings).toMatchObject({
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
  });
});
