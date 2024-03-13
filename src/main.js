import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false




import Echo from 'laravel-echo';


window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_WEBSOCKETS_KEY,
    wsHost: process.env.VUE_APP_WEBSOCKETS_SERVER,
    wsPort: 6001,
    cluster:'mt1',
    forceTLS: false,
    disableStats:true

});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
