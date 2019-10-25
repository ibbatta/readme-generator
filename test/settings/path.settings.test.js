import pathSettings from '../../src/settings/path.settings';
import path from 'path';

test('check if pathSettings exists and is not empty', () => {
  expect(pathSettings).not.toBeNull();
  expect(pathSettings).not.toBeUndefined();
  expect(Object.keys(pathSettings).length).toBeGreaterThan(0);
});

test('check if pathSettings has the right properties', () => {
  expect(pathSettings).toMatchObject({
    root: process.cwd(),
    github: path.resolve(process.cwd(), '.github'),
    readme: {
      questions: 'readme/questions',
      templates: 'readme/templates',
      hbsPartials: 'readme/templates/partials'
    }
  });
});
