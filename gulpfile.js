const elixir = require('laravel-elixir')

require('dotenv').config()
require('laravel-elixir-vue-2')

elixir(mix => {
  mix
    // .copy('bower_components/semantic/dist/themes', 'public/themes')
    // .copy('node_modules/bootstrap-sass/assets/fonts', 'public/fonts')
    // .sass('app.scss', 'resources/assets/css/bootstrap.css')
    // .less('app.less', 'resources/assets/css/semantic.css')
    // .styles(['bootstrap.css', 'semantic.css'], 'public/css/app.css')
    // .version('css/app.css')
    .webpack('app.js')
     .browserSync({
      open: false,
      notify: false,
      logConnections: false,
      reloadOnRestart: false,
      proxy: process.env.APP_URL,
      port: process.env.BROWSERSYNC_PORT,
      logPrefix: 'Laravel Eixir BrowserSync'
    })
})
