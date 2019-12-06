import fileUtils from '../../src/utilities/file';

test('check if fileUtils exists and is not empty', () => {
  expect(fileUtils).not.toBeNull();
  expect(fileUtils).not.toBeUndefined();
  expect(Object.keys(fileUtils).length).toBeGreaterThan(0);
});

// EXIST FILE TEST
test('check if a file exist correctly', async () => {
  expect.assertions(1);
  const res = await fileUtils.checkExist('package.json');
  expect(res.success).toBe(true);
});

test('check if empty path throw error', async () => {
  expect.assertions(1);
  try {
    await fileUtils.checkExist();
  } catch ({ error }) {
    expect(error).toEqual(new Error('Path must be specified'));
  }
});

test('check if throw error with non-existing file', async () => {
  expect.assertions(1);
  try {
    await fileUtils.checkExist('test.json');
  } catch ({ success }) {
    expect(success).toBe(false);
  }
});

// READ DIRECTORY TEST
test('check if get data from existing directory', async () => {
  expect.assertions(4);
  const res = await fileUtils.readDirectoryFiles('src/');
  expect(res.success).toBe(true);
  expect(res.data).not.toBeNull();
  expect(res.data).not.toBeUndefined();
  expect(Object.keys(res.data).length).toBeGreaterThan(0);
});

test('check if empty directory path throw error', async () => {
  expect.assertions(1);
  try {
    await fileUtils.readDirectoryFiles();
  } catch ({ error }) {
    expect(error).toEqual(new Error('Directory must be specified'));
  }
});

test('check if a non existing folder throw error', async () => {
  expect.assertions(1);
  try {
    await fileUtils.checkExist('fake/');
  } catch ({ success }) {
    expect(success).toBe(false);
  }
});

// READ FILE TEST
test('check if can read data from existing file', async () => {
  expect.assertions(4);
  const res = await fileUtils.readFile('package.json');
  expect(res.success).toBe(true);
  expect(res.data).not.toBeNull();
  expect(res.data).not.toBeUndefined();
  expect(Object.keys(res.data).length).toBeGreaterThan(0);
});

test('check if empty file path throw error', async () => {
  expect.assertions(1);
  try {
    await fileUtils.readFile();
  } catch ({ error }) {
    expect(error).toEqual(new Error('File must be specified'));
  }
});

test('check if cannot read data from non existing file', async () => {
  expect.assertions(1);
  try {
    await fileUtils.readFile('test.json');
  } catch ({ success }) {
    expect(success).toBe(false);
  }
});
