# **README-GENERATOR** (version 0.0.1)

![node version](https://img.shields.io/badge/node->=9.10.x-brightgreen.svg)
![yarn version](https://img.shields.io/badge/yarn->=1.9.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.3.x-brightgreen.svg)

> This project was born mainly to satisfy my desire for knowledge and to simplify my workflow. Being a curious (and also lazy) developer I have always wondered how avoid to waste my working time to write README.md files who fits perfectly project by project and that's why I wrote a tool to help me simplify and speed up these processes.

---

## **:package: Main tools used**

- [x] boxen
- [x] chalk
- [x] figlet
- [x] handlebars
- [x] inquirer
- [x] lodash
- [x] sprintf-js

---

## **:wrench: DEVELOPER USAGE**

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 9.10.x)
- [**YARN**](https://www.google.com/search?q=how+to+install+yarn) (version >= 1.9.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.3.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder `git clone https://github.com/ibbatta/readme-generator.git`

---

### **Installation**

To install the project and all dependencies, enter in the project folder and run:

```bash
# install dependencies
yarn install
```

---

### Start the project

```bash
yarn start
```

### Test the project

```bash
yarn test
```

---

### **Editor setup**

To keep consistency to the style of resources, I decided to stick to some shared rules that have to be applied to every
project using some editors plugins. Plese be sure to disable / remove any other js/jsx linters or custom configurations.

#### Eslint

I have chose to use [Eslint](https://eslint.org/) to check on Javascript / React [.js / .jsx] syntax.
It works including a `.eslintrc` file in the root directory and making sure your editor has the necessary plugin.

#### Auto correction on save

I have chose to use [js-beautify](https://github.com/beautify-web/js-beautify/) as a beautifier also for HTML and CSS.
It works including a `.jsbeautifyrc` file in the root directory and making sure your editor has the necessary plugin.

#### Basic Editor Configuration

I have chose to use [EditorConfig](https://editorconfig.org/) to share the basic configuration like indentation and
charset.
It works including an `.editorconfig` file in the root directory and making sure your editor has the necessary plugin.

#### Prettier

I have chose to use [Prettier](https://prettier.io/) to ensure the codebase with a consistent style.
It works including a `.prettierrc` file in the root directory and making sure your editor has the necessary plugin.

---

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Pietro Siccardi](http://github.com/pietrosiccardi) (Tactical support for the template engine)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:robot: Author**

_*Maurizio Battaghini*_

> [github](https://github.com/ibbatta)
&nbsp;&middot;&nbsp;[twitter](https://twitter.com/battago)

---

Copyright © 2019 [Maurizio Battaghini](https://twitter.com/battago).