//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',

  data () {
    return {      
    currentRoute: window.location.pathname
 }
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})