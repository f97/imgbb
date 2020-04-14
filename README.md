# imgbb

A lightweight Node.js module to easily upload images through imgbb API

## Usage

```bash
yarn add imgbbjs
npm install -save imgbbjs
```

```javascript
const Imgbb = require('imgbbjs')

const imgbb = new Imgbb({
  key: process.env.KEY,
});

/**
 * @param {*} IMAGE It can binary file, base64 data, or a URL for an image. (up to 32 MB) (required)
 * @param {*} NAME The name of the file (optional) 
 * @return {object} Response of request, status 400 or 200
 */
imgbb.upload(process.env.IMAGE, process.env.NAME).then(console.log); 
```
