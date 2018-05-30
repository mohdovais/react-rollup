const rollup = require('rollup');
const config = require('./rollup.config');

function build() {
    // create a bundle
    rollup
        .rollup(config)
        .then(function (bundle) {

            //console.log(bundle.imports); // an array of external dependencies
            //console.log(bundle.exports); // an array of names exported by the entry point
            //console.log(bundle.modules.length); // an array of module objects

            const { code, map } = await bundle.generate(outputOptions);

            bundle.write(config.output);
        });
}

build();