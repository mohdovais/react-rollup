/* eslint-disable @typescript-eslint/no-var-requires */
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const postcss = require('rollup-plugin-postcss');
const babel = require('rollup-plugin-babel');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: 'src/components/Hello.tsx',
    output: {
        file: `dist/bundle.js`,
        format: 'cjs',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    external: ['react', 'react-dom'],
    plugins: [
        postcss(),
        resolve({
            extensions,
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        commonjs(),
        babel({
            extensions,
            include: ['src/**/*'],
            presets: [['@babel/env', { targets: { node: 'current' } }]],
        }),
    ],
};
