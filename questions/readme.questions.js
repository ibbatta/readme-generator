export default [
  {
    name: 'frameworks',
    type: 'checkbox',
    message: 'Main technologies or frameworks used',
    choices: ['Angular', 'React', 'Vue', 'Node', 'Express'],
    default: null
  },
  {
    name: 'longDescription',
    type: 'editor',
    message: 'Long description'
  }
];
