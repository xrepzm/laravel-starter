require('./bootstrap')

import components from './components'
import store from './store'

const app = new Vue({
  name: 'LaravelApp',
  components,
  store,
}).$mount('#app')
