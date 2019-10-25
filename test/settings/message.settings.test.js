import messageSettings from '../../src/settings/message.settings';

test('check if messageSettings exists and is not empty', () => {
  expect(messageSettings).not.toBeNull();
  expect(messageSettings).not.toBeUndefined();
  expect(Object.keys(messageSettings).length).toBeGreaterThan(0);
});
