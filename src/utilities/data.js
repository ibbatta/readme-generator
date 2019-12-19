const convertInfoToObject = data => {
  const infoData = {
    name: ''
  };

  data.split(' ').forEach(value => {
    if (value.includes('<' && '>')) {
      infoData.email = data.substring(
        data.lastIndexOf('<') + 1,
        data.lastIndexOf('>')
      );
    } else if (value.includes('(' && ')')) {
      infoData.url = data.substring(
        data.lastIndexOf('(') + 1,
        data.lastIndexOf(')')
      );
    } else {
      infoData.name = `${`${infoData.name} ${value}`}`.trim();
    }
  });

  return infoData;
};

export default {
  convertInfoToObject
};
