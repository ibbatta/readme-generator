import messageSettings from '../../src/settings/message';

test('check if messageSettings exists and is not empty', () => {
  expect(messageSettings).not.toBeNull();
  expect(messageSettings).not.toBeUndefined();
  expect(Object.keys(messageSettings).length).toBeGreaterThan(0);
});
