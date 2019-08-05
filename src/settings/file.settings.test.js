import fileSettings from './file.settings';

test('check if fileSettings exists and is not empty', () => {
  expect(fileSettings).not.toBeNull();
  expect(fileSettings).not.toBeUndefined();
  expect(Object.keys(fileSettings).length).toBeGreaterThan(0);
});
