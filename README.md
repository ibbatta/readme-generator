# **PERSONAL GITHUB REPOSITORY TEMPLATE**

![Node version](https://img.shields.io/badge/node-%3E%3D9.10.x-brightgreen.svg)
![Yarn version](https://img.shields.io/badge/yarn-%3E%3D1.9.x-brightgreen.svg)
![Npm version](https://img.shields.io/badge/npm-%3E%3D6.2.x-brightgreen.svg)
![Nvm version](https://img.shields.io/badge/nvm-%3E%3D0.33.x-brightgreen.svg)
---
![Version](https://img.shields.io/github/package-json/v/ibbatta/readme-generator.svg)
![License: MIT](https://img.shields.io/github/license/ibbatta/readme-generator.svg)
![Repository size](https://img.shields.io/github/repo-size/ibbatta/readme-generator.svg)
![Opened issues](https://img.shields.io/bitbucket/issues/ibbatta/readme-generator.svg)
![Activity](https://img.shields.io/github/commit-activity/m/ibbatta/readme-generator.svg)
---
![Twitter follower](https://img.shields.io/twitter/follow/battago.svg?style=social)
---

> CLI that generates beautiful and professional README.md files

This project was born mainly to satisfy my desire for knowledge and to simplify my workflow.
Being a curious (and also lazy) developer I have always wondered how avoid to waste my working time to write README.md files who fits perfectly project by project and that's why I wrote a tool to help me simplify and speed up these processes.

---

## **What this boilerplate contains**

<img alt="logo npm" src="./.readme-assets/logo-npm.png" height="55" >&nbsp;&nbsp;
<img alt="logo node" src="./.readme-assets/logo-node.png" height="55" >&nbsp;&nbsp;
<img alt="logo es6" src="./.readme-assets/logo-es6.png" height="55" >&nbsp;&nbsp;
<img alt="logo jest" src="./.readme-assets/logo-jest.png" height="55" >&nbsp;&nbsp;
<img alt="logo yarn" src="./.readme-assets/logo-yarn.png" height="55" >&nbsp;&nbsp;

#### **Features**

- [x] Babel (ES6 / ES7)
- [x] Develpment / Production environment ready
- [x] Airbnb javascript linter
- [x] Test environment with Jest
- [x] Full node package realeased on npm (local and global installation available)

---

## **Set up project**

Before cloning the repo **be sure** you have installed:

- [Node](http://nodejs.org/download/) (version >= 9.10.x), please install NVM and run `nvm use` to have the right node version for the project
- [Yarn](https://yarnpkg.com/en/docs/install) (version >= 1.9.x)
- [Npm](https://www.npmjs.com/) (version >= 6.2.x)
- [Nvm](https://github.com/creationix/nvm) (version >= 0.33.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder `git clone https://github.com/ibbatta/readme-generator.git`

---

## **Installation**

To install the project and all dependencies, enter in the project folder and run:

```bash
# install dependencies
npm install
```

or

```bash
# install dependencies
yarn
```

---

## **Run the project**

### Run the project to develop

It will run the cli of the project locally

```bash
npm start
# or
yarn start
```

### Build the project for production

It will create a folder `/lib` and compile the es6 / es7 js syntax

```bash
npm build
#or
yarn build
```

You can add the `--watch` flag if you want keep watching changes for test files.

### Run the tests

```bash
npm test
#or
yarn test
```

You can add the `--watch` flag if you want keep watching changes for test files.

---

## **Editor setup**

To keep consistency to the style of resources, I decided to stick to some shared rules that have to be applied to every project using some editors plugins. Plese be sure to disable / remove any other js/jsx linters or custom configurations.

### Basic Editor Configuration

I chose to use [EditorConfig](http://editorconfig.org/) to share the basic configuration like indentation and charset. It works including an `.editorconfig` file in the root directory and making sure your editor has the necessary plugin. You can find a list of downloads [here](http://editorconfig.org/#download). The choice to keep the indentation with 2 spaces is to be compliant with actual standards (major frameworks use this configuration both for JS and CSS).

### Auto correction on save

I have chose to use [js-beautify](https://github.com/beautify-web/js-beautify). Despite of his name it works as a beautifier also for HTML and CSS. Every editor has a plugin that implement it, es. [Sublime](https://github.com/victorporof/Sublime-HTMLPrettify), [Atom](https://atom.io/packages/atom-beautify) or [Visual studio](https://www.visualstudio.com/it/?rr=https%3A%2F%2Fwww.google.it%2F). The setup for js-beautify is controlled within a `.jsbeautifyrc` file that have to be included in the root directory of the project (.hbs are not completely supported yet).

### Eslint

To check on Javascript / React [.js / .jsx] syntax I use [Eslint](http://eslint.org/). The rules to detect errors are written in a `.eslintrc` file included in the root directory of the project (for best practices use `airbnb linter`).

---

## **Todo**

- [ ] Define a developing path for the project
- [ ] Define and configure tests
- [ ] DOCKER: container creation
- [ ] NPM: local package creation (and publish)

---

## **Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

## **Credits**

- [Pietro Siccardi](https://github.com/psiccardi) (for docker and template development) work in progress

---

### **Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may not be a good fit for your project(s).

---

> GitHub [@ibbatta](https://github.com/ibbatta) &nbsp;&middot;&nbsp;
> Twitter [@battago](https://twitter.com/battago)
