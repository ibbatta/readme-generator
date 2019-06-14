# **PERSONAL GITHUB REPOSITORY TEMPLATE**

> Personal configuration for a Github repository template

Small project description about the repository, what it does and what to do next.

---

## **What this boilerplate contains**

<img src="./.readme-assets/default-icon.png" height="55" alt="logo placeholder">&nbsp;&nbsp;
<img src="./.readme-assets/default-icon.png" height="55" alt="logo placeholder">&nbsp;&nbsp;
<img src="./.readme-assets/default-icon.png" height="55" alt="logo placeholder">&nbsp;&nbsp;
<img src="./.readme-assets/default-icon.png" height="55" alt="logo placeholder">&nbsp;&nbsp;
<img src="./.readme-assets/default-icon.png" height="55" alt="logo placeholder">&nbsp;&nbsp;

#### **Features**

- [x] Feature / Framework I have added to the project
- [x] Feature / Framework I have added to the project
- [x] Feature / Framework I have added to the project
- [x] Feature / Framework I have added to the project
- [x] Feature / Framework I have added to the project

---

## **Set up project**

Before cloning the repo **be sure** you have installed:

- [Node](http://nodejs.org/download/) (version >= 9.10.x), please install NVM and run `nvm use` to have the right node version for the project
- [Yarn](https://yarnpkg.com/en/docs/install) (version >= 1.9.x)
- [Npm](https://www.npmjs.com/) (version >= 6.2.x)
- [Nvm](https://github.com/creationix/nvm) (version >= 0.33.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder `git clone [**INSERT YOUR REPO URL HERE**]`

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

##### Run the project to develop:

```bash
npm start:dev
# or
yarn start:dev
```

##### Run the project to production:

```bash
npm start
#or
yarn start
```

---

## **Editor setup**

To keep consistency to the style of resources, I decided to stick to some shared rules that have to be applied to every project using some editors plugins. Plese be sure to disable / remove any other js/jsx linters or custom configurations.

#### Basic Editor Configuration

I chose to use [EditorConfig](http://editorconfig.org/) to share the basic configuration like indentation and charset. It works including an `.editorconfig` file in the root directory and making sure your editor has the necessary plugin. You can find a list of downloads [here](http://editorconfig.org/#download). The choice to keep the indentation with 2 spaces is to be compliant with actual standards (major frameworks use this configuration both for JS and CSS).

#### Auto correction on save

I have chose to use [js-beautify](https://github.com/beautify-web/js-beautify). Despite of his name it works as a beautifier also for HTML and CSS. Every editor has a plugin that implement it, es. [Sublime](https://github.com/victorporof/Sublime-HTMLPrettify), [Atom](https://atom.io/packages/atom-beautify) or [Visual studio](https://www.visualstudio.com/it/?rr=https%3A%2F%2Fwww.google.it%2F). The setup for js-beautify is controlled within a `.jsbeautifyrc` file that have to be included in the root directory of the project (.hbs are not completely supported yet).

#### Eslint

To check on Javascript / React [.js / .jsx] syntax I use [Eslint](http://eslint.org/). The rules to detect errors are written in a `.eslintrc` file included in the root directory of the project (for best practices use `airbnb linter`).

---

## **Todo**

- [x] Todo checked
- [x] Todo checked
- [ ] Todo in waiting list
- [ ] Todo in waiting list
- [ ] Todo in waiting list

---

## **Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

## **Credits**

- [User name]() (why I say thanks)

---

### **Troubleshootings**

This is just a personal project created for study / demonstration purpose only, it may or may not be a good fit for your project(s).

---

> GitHub [@ibbatta](https://github.com/ibbatta) &nbsp;&middot;&nbsp;
> Twitter [@battago](https://twitter.com/battago)
