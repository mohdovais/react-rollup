requirejs.config({
    paths: {
        app: '../dist/bundle',
        react: 'vendor/react.development',
        'react-dom': 'vendor/react-dom.development',
        'prop-types': 'vendor/prop-types',
    },
});

require(['app'], function(app) {
    app.render.call(document.getElementById('app'));
});
