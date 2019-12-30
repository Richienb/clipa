# Clipa [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/clipa/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/clipa)

Cross-platform copying and pasting from the clipboard.

[![NPM Badge](https://nodei.co/npm/clipa.png)](https://npmjs.com/package/clipa)

## Install

```sh
npm install clipa
```

## Usage

```js
let clipboard = require("clipa");

// Set data
clipboard = "Hello World!";

// Get data
console.log(clipboard);
//=> 'Hello World!'
```

## API

### clipboard

Type: `string`

The clipboard content.
