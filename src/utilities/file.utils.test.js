import fileUtils from './file.utils';

test('check if fileUtils exists and is not empty', () => {
  expect(fileUtils).not.toBeNull();
  expect(fileUtils).not.toBeUndefined();
  expect(Object.keys(fileUtils).length).toBeGreaterThan(0);
});

// test('', () => {
//   jest.mock('moduleName');
// });
