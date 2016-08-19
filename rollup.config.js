import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        json(),
        commonjs({
            include: 'node_modules/**'
        }),
        babel(),
    ],
    dest: 'dist/index.js'
};
