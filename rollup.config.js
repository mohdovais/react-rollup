/*global process*/
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import html from './rollup/rollup-plugin-html';
import React from 'react';
import { renderToString } from 'react-dom/server';

import rollupConfigSSR from './rollup/rollup.config.ssr';
import requireFromRollupBundle from './rollup/require-from-bundle';

const production = !process.env.ROLLUP_WATCH;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const rand = Math.round(Math.random() * 1e10).toString(16);

export default {
    input: 'src/main.tsx',
    output: {
        file: `dist/bundle-${rand}.js`,
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        postcss({
            plugins: [autoprefixer],
            minimize: production && {
                reduceIdents: false,
            },
            extract: true,
        }),
        resolve({
            extensions,
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(
                production ? 'production' : 'development'
            ),
            __REACT_DEVTOOLS_GLOBAL_HOOK__: undefined,
        }),
        commonjs(),
        babel({
            extensions,
            include: ['src/**/*'],
            presets: [['@babel/env', { targets: '>1%, not ie 11' }]],
        }),
        production && terser(),
        html({
            template: 'src/index.html',
            content: requireFromRollupBundle(rollupConfigSSR).then(
                App =>
                    `<div id="root">${renderToString(
                        React.createElement(App, { name: 'Ovais' })
                    )}</div>`
            ),
            minimize: production,
        }),
    ],
};
