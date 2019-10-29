import systemUtils from '../../src/utilities/system';

test('check if fileUtils exists and is not empty', () => {
  expect(systemUtils).not.toBeNull();
  expect(systemUtils).not.toBeUndefined();
  expect(Object.keys(systemUtils).length).toBeGreaterThan(0);
});
