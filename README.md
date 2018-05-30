# React Rollup Setup


## devDependencies

### autoprefixer
PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from "Can I Use". 

https://github.com/postcss/autoprefixer

### babel-core
Babel compiler core.

https://github.com/babel/babel/tree/master/packages/babel-core

### babel-plugin-external-helpers

Babel's external-helpers plugin, which allows Rollup to include any 'helpers' just once at the top of the bundle, rather than including them in every module that uses them (which is the default behaviour).

https://babeljs.io/docs/plugins/external-helpers/

### babel-preset-env

Set "modules": false in babelrc preset, otherwise Babel will convert modules to CommonJS before Rollup gets a chance to do its thing, causing it to fail.

### babel-preset-react

An all-in-one preset for React & JSX transformation

### cheerio

Fast, flexible, and lean implementation of core jQuery designed specifically for node. Using it in build script to inject/create html file (similar to webpack html plugin)

### eslint

### eslint-config-standard

### eslint-plugin-import

### eslint-plugin-node

### eslint-plugin-promise

### eslint-plugin-react

### eslint-plugin-standard

### html-minifier

HTMLMinifier is a highly configurable, well-tested, JavaScript-based HTML minifier. Using it to minify html file in production build.

### rollup

### rollup-plugin-babel

### rollup-plugin-commonjs

### rollup-plugin-node-resolve

### rollup-plugin-postcss

### rollup-plugin-replace

### rollup-plugin-uglify