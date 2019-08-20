import hbsUtils from './handlebar.utils';

test('check if fileUtils exists and is not empty', () => {
  expect(hbsUtils).not.toBeNull();
  expect(hbsUtils).not.toBeUndefined();
  expect(Object.keys(hbsUtils).length).toBeGreaterThan(0);
});

test('should throw error if if try to register partial with missing name', async () => {
  expect.assertions(1);
  try {
    await hbsUtils.registerPartial();
  } catch (error) {
    expect(error).toEqual(new Error('Template name must be specified'));
  }
});

test('should throw error if try to register partial with missing template', async () => {
  expect.assertions(1);
  try {
    await hbsUtils.registerPartial(
      './src/readme/templates/partials/title.partial.hbs'
    );
  } catch (error) {
    expect(error).toEqual(new Error('Partial data must be specified'));
  }
});

test('check if parse a handlebar template correctly', () => {
  const name = 'Maurizio';
  const data = hbsUtils.generateHandlebar('{{name}}', { name });
  expect(data).toEqual(name);
});
