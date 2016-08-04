require.config({
    baseUrl: '',
    paths: {
        jquery: 'js/libs/jquery.3.1.0.min',
        vue: 'js/libs/vue',
        apploader: 'js/libs/apploader'
    }
});

require(['jquery', 'apploader', 'vue'], function () {
    loader("t1");
});


