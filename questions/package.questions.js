export default [{
        name: 'name',
        type: 'input',
        message: 'Project name',
        default: null
    },
    {
        name: 'version',
        type: 'input',
        message: 'Version',
        default: '0.0.1'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Short description',
        default: null
    },
    {
        name: 'homepage',
        type: 'input',
        message: 'Homepage',
        default: null
    },
    {
        name: 'author.name',
        type: 'input',
        message: 'Author name',
        default: null
    },
    {
        name: 'author.email',
        type: 'input',
        message: 'Author email',
        default: null
    },
    {
        name: 'author.url',
        type: 'input',
        message: 'Author url',
        default: null
    },
    {
        name: 'license',
        type: 'list',
        message: 'Which is better?',
        choices: [
            'MIT',
            'Apache License 2.0',
            'GPL',
            'LGPL',
            'Common Development and Distribution License'
        ]
    }
];
