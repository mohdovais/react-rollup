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

//import rollupConfigSSR from './rollup/rollup.config.ssr';
//import requireFromRollupBundle from './rollup/require-from-bundle';

const production = !process.env.ROLLUP_WATCH;
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/*
const ssr = requireFromRollupBundle(rollupConfigSSR).then(
    App =>
        `<div id="root">${renderToString(
            React.createElement(App, { name: 'Ovais' })
        )}</div>`
);
*/

//const rand = Math.round(Math.random() * 1e10).toString(16);

export default {
    input: 'src/main.tsx',
    output: {
        dir: 'dist',
        format: 'esm', //'umd',
        sourcemap: true,
        chunkFileNames: '[name].js',
    },
    manualChunks: function(id) {
        if (id.includes('node_modules')) {
            return 'vendor';
        }
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
            //__REACT_DEVTOOLS_GLOBAL_HOOK__: undefined,
        }),
        commonjs({
            namedExports: {
                'node_modules/react/index.js': [
                    'Children',
                    'Component',
                    'PropTypes',
                    'Suspense',
                    'createElement',
                    'useContext',
                    'useMemo',
                    'useEffect',
                    'useLayoutEffect',
                    'useRef',
                    'useReducer',
                    'memo',
                ],
                'node_modules/react-dom/index.js': [
                    'render',
                    'unstable_batchedUpdates',
                ],
                'node_modules/react-is/index.js': [
                    'isValidElementType',
                    'isContextConsumer',
                ],
            },
        }),
        babel({
            extensions,
            include: ['src/**/*'],
            presets: [['@babel/env', { targets: '>1%, not ie 11' }]],
        }),
        production && terser(),
        html({
            template: 'src/index.html',
            content: '<div id="root"></div>',
            minimize: production,
        }),
    ],
};
