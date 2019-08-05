import dataSettings from './data.settings';

test('check if dataSettings exists and is not empty', () => {
  expect(dataSettings).not.toBeNull();
  expect(dataSettings).not.toBeUndefined();
  expect(dataSettings.length).toBeGreaterThan(0);
});

test('check if dataSettings contain all right values', () => {
  expect(dataSettings).toEqual(
    expect.arrayContaining([
      'name',
      'version',
      'description',
      'repository',
      'author',
      'engines',
      'dependencies',
      'contributors'
    ])
  );
});
