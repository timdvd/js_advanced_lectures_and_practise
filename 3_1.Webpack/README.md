# What is Webpack?

## Webpack is a module bundler for JavaScript applications.

### - It takes all your project files (JS, CSS, images, etc.) and bundles them into optimized files.

### - It allows you to use ES6+ modules (import/export) and even things like TypeScript, SCSS, React, Vue, etc. (via loaders and plugins).

### - Makes your app faster and easier to deploy.

## Why Use Webpack?
 - ✅ Supports ES6+ modules
 - ✅ Optimizes code (minification, tree-shaking, splitting)
 - ✅ Handles assets (CSS, images, fonts, etc.)
 - ✅ Development server with hot reloading
 - ✅ Works with frameworks like React, Angular, Vue

## Basic Example
### 1) Install Webpack
```
npm init -y
npm install --save-dev webpack webpack-cli
```

### 2) Project Structure
```
my-app/
  src/
    index.js
    math.js
  dist/
    index.html
  package.json
```

### 3) Example Code
```
math.js

export const add = (a, b) => a + b;
```
```
index.js

import { add } from './math.js';

console.log("Result:", add(2, 3));
```
```
index.html

<!DOCTYPE html>
<html>
  <head><title>Webpack Example</title></head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```

### 4) Bundle with Webpack
```
Add to package.json:

"scripts": {
  "build": "webpack --mode development"
}
```
```
Then run:

npm run build
```

## Webpack will create a dist/bundle.js, and your HTML can load it.

### Webpack Config File (Optional but Common)
```
Create webpack.config.js:

const path = require('path');

module.exports = {
  entry: './src/index.js',       // Entry point
  output: {
    filename: 'bundle.js',       // Output file
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',           // or 'production'
  module: {
    rules: [
      {
        test: /\.css$/,          // Load CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

```

Run again:
```
npm run build
```
## Useful Add-ons

### - webpack-dev-server → live reloading

### - Babel loader → transpile ES6+ to older JS

### - MiniCssExtractPlugin → separate CSS file

### - Image loaders → optimize images

## ✅ In short:
### Webpack bundles your app’s files (JS, CSS, assets) into efficient code for development and production. It’s like a “build tool” that makes your code ready for the browser.

##  Don't forget to type in cmd " npm i " in order to get all packages)
