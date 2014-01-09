Contributing to SparxUI
=======================
## Coding Standards and Guiding Principles
Our guiding principles are:

* Accessibility
* Performance
* Technical Excellence

Our CSS code follows the existing and well-known [SMACSS](http://smacss.com/) principles.

## Global Dependencies
SparxUI is dependent on [node.js](http://nodejs.org/) and [Grunt](http://gruntjs.com/). Install nodejs and then open your terminal:

```
npm install -g grunt-cli
```

### Local Project Setup

```
git clone git@github.com:hanyelemary/sparx-ui.git
cd sparx-ui
npm install
grunt
```

Open up the kitchensink template in your browser to see the available widgets. It should be listed under the directory /templates/kitchensink/index.html

## Contributing
Have you checked out our current issues? If not, we recommend you do so.

* Fork the repo
* Create your branch `git checkout -b branch-name`
* Make your code is standards-compliant and well-tested in multiple browsers.
* Commit you changes `git commit -am "Added a super awesome css widget"`
* Push your branch `git push origin branch-name`
* Create a new pull request

Cheers for contributing!