/*global process*/
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;
const NODE_ENV = production ? 'production' : 'development';

export default {
    input: 'src/main.jsx',
    output: {
        file: `dist/bundle.js`,
        format: 'iife',
        sourcemap: !production,
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
            browser: true,
            extensions: ['.mjs', '.js', '.jsx', '.json'],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
        }),
        production && terser(),
    ],
};
