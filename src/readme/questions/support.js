module.exports = [
  {
    name: 'support',
    type: 'confirm',
    message: 'Do you have a Patreon account?',
    default: false
  },
  {
    name: 'support.patreon',
    type: 'input',
    message: 'Insert your Patreon username',
    when: answer => {
      return answer.support;
    }
  }
];
