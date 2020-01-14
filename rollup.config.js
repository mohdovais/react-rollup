/*global process*/
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import svg from 'rollup-plugin-svg-hyperscript';
import customUMD from './rollup-plugin-custom-umd';

const production = !process.env.ROLLUP_WATCH;
const NODE_ENV = production ? 'production' : 'development';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'org.app',
        amd: {
            id: 'app',
        },
        sourcemap: !production,
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'prop-types': 'PropTypes',
        },
    },
    external: ['react', 'react-dom', 'prop-types'],
    plugins: [
        customUMD(),
        postcss({
            plugins: [autoprefixer],
            minimize: production && {
                reduceIdents: false,
            },
            extract: true,
        }),
        svg(),
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
    watch: {
        clearScreen: false,
    },
};
