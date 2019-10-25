# **:triangular_flag_on_post: @IBBATTA/README GENERATOR**

![Version](https://img.shields.io/github/package-json/v/ibbatta/readme-generator.svg)
![Npm downloads](https://img.shields.io/npm/dt/@ibbatta/readme-generator)
![Repository size](https://img.shields.io/github/repo-size/ibbatta/readme-generator.svg)
![Opened issues](https://img.shields.io/github/issues/ibbatta/readme-generator.svg)
![License: MIT](https://img.shields.io/github/license/ibbatta/readme-generator.svg)

[![Twitter follower](https://img.shields.io/twitter/follow/battago.svg?style=social)](https://twitter.com/battago)

> This project was born to simplify my workflow and satisfy my desire for knowledge. Being a curious (and also lazy) developer, I've always wandered how to avoid wasting time writing README.md files that fit perfectly project after project. That's why I wrote this tool to help simplify and speed up this process!

![Example gif](./.github/assets/example.gif)

---

## Instalation

- To install globally: `npm i -g @ibbatta/readme-generator`.
- To install locally: `npm i --save-dev @ibbatta/readme-generator`.

## Usage

Just run `readme-generator` (or `npx readme-generator`) at the root of your project and follow the prompts!

You can add the following options:

| Option         | Description                                  | Default                     |
| -------------- | -------------------------------------------- | --------------------------- |
| -V, --version  | output the version number                    |                             |
| -h, --help     | output usage information                     |                             |
| -e, --entry    | specify the entry file                       | `package.json`              |
| -o, --output   | specify the output file                      | `README.md`                 |
| -t, --template | specify the path for you own README template | `internal default template` |
| -d, --debug    | log output readme data                       | `false`                     |

The tool will look for the **name**, **version**, **description**, **respository**, **author**, **engines**, **dependencies** and **contributors** data inside you package.json and then will generate the README.md file based on this information.

Due to this tool being mainly created for node based projects, it will take the package.json by default.
If you project doesn't have a package.json, you can specify another json file.

_NOTE_: To generate a complete `README.md`, make sure that the structure of your `package.json` (or you entry file) looks like this:

```js
{
    "name": "PROJECT NAME",
    "version": "PROJECT VERSION",
    "description": "LONG PROJECT DESCRIPTION",
    "repository": {
        "url": "REPOSITORY URL"
    },
    "author": {
        "name": "AUTHOR FULL NAME",
        "email": "AUTHOR EMAIL ADDRESS",
        "url": "AUTHOR URL",
        "social": {
            "github": "...",
            "twitter": "...",
            "ADD MORE SOCIAL IF YOU WANT": "..."
        }
    },
    "contributors": [{
        "name": "CONTRIBUTOR FULL NAME",
        "url": "CONTRIBUTOR URL",
        "reason": "THE REASON WHY YOU HAVE ADDED THIS CONTRIBUTOR AND/OR HIS HELP TO THE PROJECT"
    }],
    "engines": {
       ...
    },
    "dependencies": {
        ...
    }
}

```

_If no entry file is specified, and package.json is missing, the tool will prompt you for information instead._

I've added two custom fields inside `package.json`:

- **SOCIAL** (inside author)
- **REASON** (inside each contributor)

This allows the tool to create a better `README` with more information.

Here is a generated [README example](https://github.com/ibbatta/readme-generator/blob/master/EXAMPLE-README.md).

---

## **:wrench: Development**

### **Set up project**

Before cloning the repo **make sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 8.9.x)
- [**YARN**](https://www.google.com/search?q=how+to+install+yarn) (version >= 1.9.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.3.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder: `git clone https://github.com/ibbatta/readme-generator.git`

---

### **Installation**

First, enter in the project folder and run `nvm use` to check you have the right node version, then run `yarn install` to install all the dependencies.

---

#### Start the project

To run the cli of the project locally:

```bash
npm start
# or
yarn start
```

#### Build the project for production

This will create a folder `/lib` and compile the es6 / es7 js syntax:

```bash
npm build
#or
yarn build
```

You can add the `--watch` flag if you want keep watching changes for test files.

#### Run the tests

```bash
npm test
#or
yarn test
```

You can add the `--watch` flag if you want keep watching changes for test files.

---

## **Editor setup**

To keep the style of resources consistent, I decided to stick to some shared rules that have to be applied to every
project using some editors plugins. Plese be sure to disable / remove any other js/jsx linters or custom configurations.

### Eslint

I have chosen to use [Eslint](https://eslint.org/) to lint the Javascript / React [.js / .jsx] syntax.
It includes a `.eslintrc` file in the root directory. Make sure your editor has the right plugins.

### Auto correction on save

I have chosen to use [js-beautify](https://github.com/beautify-web/js-beautify/) as the beautifier for the HTML and CSS.
It includes a `.jsbeautifyrc` file in the root directory. Make sure your editor has the right plugins.

### Basic Editor Configuration

I have chosen to use [EditorConfig](https://editorconfig.org/) to share the basic configuration like indentation and
charset.
It includes a `.editorconfig` file in the root directory. Make sure your editor has the right plugins.

### Prettier

I have chosen to use [Prettier](https://prettier.io/) to ensure the codebase has a consistent style.
It includes a `.prettierrc` file in the root directory. Make sure your editor has the right plugin.

---

## **:handshake: Contributing**

Contributions, issues and feature requests are welcome.
Feel free to check the issues page if you want to contribute, and follow these simple steps:

- Fork it!
- Create your feature (or fix) branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request!

---

### **:anger: Troubleshooting**

This is just a personal project created for study / demonstration purposes and to simplify my working life, it may or may not be a good fit for your project!

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improve my work.

<a href="https://www.patreon.com/ibbatta" target="_blank">
  <img alt="Patron logo" src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="150px"/>
</a>

---

### **:robot: Author**

Maurizio Battaghini

> GitHub [@ibbatta](https://github.com/ibbatta) &nbsp;&middot;&nbsp;
> Twitter [@battago](https://twitter.com/battago)

---

Copyright © 2019 [Maurizio Battaghini](https://github.com/ibbatta).\
This project is covered by the [MIT](https://github.com/ibbatta/readme-generator/blob/develop/LICENSE) license.
