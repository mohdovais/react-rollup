/*global process*/
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import stripPropTypes from 'rollup-plugin-strip-prop-types';

const production = !process.env.ROLLUP_WATCH;
const NODE_ENV = production ? 'production' : 'development';

export default {
    input: 'src/main.jsx',
    output: {
        file: `dist/bundle.js`,
        format: 'umd',
        name: 'app-name',
        sourcemap: !production,
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    },
    external: ['react', 'react-dom'],
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
        production &&
            stripPropTypes({
                sourceMap: false,
            }),
        babel({
            exclude: 'node_modules/**',
        }),
        production && terser(),
    ],
    watch: {
        clearScreen: false,
    },
};
