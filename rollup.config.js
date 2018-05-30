/*global process*/
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import html from './rollup/rollup-plugin-html';

const PRODUCTION = 'production';
const NODE_ENV = process.env.NODE_ENV === PRODUCTION ? PRODUCTION : 'development';
const prod = NODE_ENV === PRODUCTION;

console.log(process.env.BABEL_ENV)

export default {
    input: 'src/main.jsx',
    output: {
        file: `dist/${NODE_ENV}/bundle.js`,
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        postcss({
            plugins: [autoprefixer],
            minimize: prod && {
                reduceIdents: false
            },
            extract: true
        }),
        resolve({
            browser: true,
            extensions: [ '.mjs', '.js', '.jsx', '.json' ]
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        prod && uglify(),
        html({
            template: 'src/index.html',
            favicon: 'src/assets/icons/favicon.ico',
            title: 'Hello world',
            minify: prod
        })
    ]
};
