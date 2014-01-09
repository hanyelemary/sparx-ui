SparxUI
=======

A light-weight UI framework for creating responsive, future-friendly and accessible web apps. Use it for rapid prototyping or production-grade applications.

## Guiding Principles

### Accessibility:

ARIA roles and landmarks included on widgets.
Regular accessibility tests, WCAG 2.0 Level AA and Section 508 compliant.

### Performance:
Rich widgets with small payload.
The framework will NOT grow beyond 10 kb minified + gzipped.

### Technical Excellence:
Built on top of SMACSS principles. 
Content-first and progressive enhancement drive our work. 

## Local Project Setup
We use [Grunt](http://gruntjs.com/) to build the project. Grunt and Grunt plugins are installed and managed via npm, the [Node.js](http://nodejs.org/) package manager.

If you haven't already, install nodejs and then open your terminal. Install grunt command line interface as a global package. You might need prefix this command with ```sudo``` depending on your permissions:

```
npm install -g grunt-cli
```

Make sure you have grunt installed by testing:

```
grunt -v
```

In order to install all the dependency that SparxUI uses, run this command:

```
npm install
```

To check out the available tasks that SparxUI uses, run the help command from the sparx-ui directory:

```
grunt -help
```

Now you can run ```grunt``` to run all of the default tasks for SparxUI under the sparx-ui directory.

You should be all set now. Ready to contribute? Great, check out our coding standards and our [contributing](CONTRIBUTING.md) guide.

## Browser Support:

The idea behind SparxUI was to build a forward-looking framework that follows progressive enhancement. Meaning, SparxUI will provide a baseline experience for older browsers such as IE7 and IE8, while enhancing the experience drastically for modern browsers. 

SparxUI was never meant to achieve design parity or fix browser-specific quirks. It was simply built on top of web standards … If your browser supports them, so will SparxUI. Period. End of story.

### Browser Testing:

But just to not freak you out too much, here is the list of browsers and Operating Systems we’ve tested on:

* Chrome
* Safari
* Firefox
* Opera
* IE8+
* Android 4+
* iOS 6+
