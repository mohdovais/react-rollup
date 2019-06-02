/* eslint-disable @typescript-eslint/no-var-requires */
const rollup = require('rollup');

function requireFromString(src, filename) {
    var _module_ = new module.constructor();
    _module_.paths = module.paths;
    _module_._compile(src, filename);
    return _module_.exports;
}

export default async function requireFromRollupBundle(rollupConfig) {
    const bundle = await rollup.rollup(rollupConfig);
    const outputOptions = rollupConfig.output;
    const { output } = await bundle.generate(outputOptions);

    for (const chunkOrAsset of output) {
        if (chunkOrAsset.isEntry && !chunkOrAsset.isAsset) {
            return requireFromString(chunkOrAsset.code, chunkOrAsset.fileName);
        }
    }
}
