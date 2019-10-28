import ymlUtils from '../../src/utilities/yaml';

test('check if fileUtils exists and is not empty', () => {
  expect(ymlUtils).not.toBeNull();
  expect(ymlUtils).not.toBeUndefined();
  expect(Object.keys(ymlUtils).length).toBeGreaterThan(0);
});
