/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const { createFilter } = require('rollup-pluginutils');
//const cheerio = require('cheerio');
//const minify = require('html-minifier').minify;

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

export default function html(userConfig) {
    const config = Object.assign({}, userConfig);
    const filter = createFilter(userConfig.include, userConfig.exclude);

    return {
        name: 'html',
        generateBundle: async function(opts, bundle) {
            const dir = opts.dir || path.dirname(opts.file);
            const fileName = path.parse(config.template).base;
            const content =
                typeof config.content === 'string'
                    ? config.content
                    : await config.content;

            const js = Object.keys(bundle)
                .filter(fileName => bundle[fileName].isEntry)
                .map(fileName => `<script src="${fileName}"></script>`)
                .join('');

            const css = Object.keys(bundle)
                .filter(
                    fileName =>
                        bundle[fileName].isAsset &&
                        fileName.lastIndexOf('.css') > -1
                )
                .map(
                    fileName => `
    <script>(function (d,l) {l = d.createElement('link');l.setAttribute('rel', 'stylesheet');l.setAttribute('href', '${fileName}');d.head.appendChild(l);}(document))</script>`
                )
                .join('');

            const htmlString = fs.readFileSync(config.template, 'utf8');
            const indexOfBody = htmlString.lastIndexOf('</body>');
            const newHTML =
                htmlString.substring(0, indexOfBody) +
                '\n    ' +
                content +
                '\n    ' +
                css +
                '\n    ' +
                js +
                htmlString.substring(indexOfBody);

            const filePath = path.join(dir, fileName);

            ensureDirectoryExistence(filePath);

            fs.writeFileSync(filePath, newHTML, 'utf8');
        },
    };
}
