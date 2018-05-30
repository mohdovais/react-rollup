const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const minify = require('html-minifier').minify;

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

</body>
</html>`;

const DEFAULT_MINIFY_CONFIG = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    html5: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeTagWhitespace: true,
};

const DEFAULT_CONFIG = {
    title: '',
    filename: 'index.html',
    template: '',
    inject: 'body', // 'head'
    favicon: '',
    minify: false,
    script: {}
};

const applyTemplate = function (content, config) {
    const $ = cheerio.load(content);
    let html;

    if (config.title !== '') {
        $('html>head>title').text(config.title);
    }

    const hasFavicon = $('link[rel="shortcut icon"]', $.root()).attr('href') === 'favicon.ico';

    if (config.favicon !== '' && !hasFavicon) {
        $('<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">').appendTo('html>head');
    }

    $(`<script src="${config.jsFile}"></script>`).appendTo('body');

    html = $.html();

    if (config.minify) {
        html = minify(html, config.minify);
    }

    return html;
};

const getHtml = function (template) {
    if (template === '') {
        return HTML;
    } else {
        return fs.readFileSync(path.resolve(template), 'utf-8');
    }
};

const generate = function (config, jsFile) {
    const dirJS = path.dirname(jsFile);
    const htmlFile = dirJS + '/' + config.filename;
    const dirHtml = path.dirname(htmlFile);
    const html = getHtml(config.template);

    config.jsFile = path.relative(dirHtml, jsFile);

    const content = applyTemplate(html, config);

    fs.writeFileSync(htmlFile, content, 'utf-8');

    if (config.favicon !== '') {
        fs.createReadStream(path.resolve(config.favicon))
            .pipe(fs.createWriteStream(path.resolve(dirHtml, 'favicon.ico')));
    }
};

export default function (userConfig) {
    const config = Object.assign(DEFAULT_CONFIG, userConfig);

    if (config.minify) {
        config.minify = Object.assign({}, DEFAULT_MINIFY_CONFIG, userConfig.minify);
    }

    config.inject = config.inject === 'head' ? 'head' : 'body';

    return {
        name: 'html',
        onwrite: function(options){
            generate(config, options.file);
        }
    };
}