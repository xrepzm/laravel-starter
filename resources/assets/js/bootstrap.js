import _ from 'lodash'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

window._ = _
window.$ = window.jQuery = require('jquery')
window.Vue = Vue

require('bootstrap-sass')
require('../../../bower_components/semantic/dist/semantic.js')

Vue.use(VueResource)

Vue.http.options.root = 'http://laravel-starter.dev/api'
Vue.http.options.crossOrigin = true

Vue.http.interceptors.push((request, next) => {
  request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken)

  next()
})
