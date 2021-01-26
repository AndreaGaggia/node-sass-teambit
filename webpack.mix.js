let mix = require("laravel-mix");

mix.js("src/assets/js/main.js", "js")
    .sass("src/assets/scss/style.scss", "css")
    .setPublicPath("dist");
