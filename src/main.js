import Vue from 'vue'
import beforeEach from './routes/beforeEach'
import App from './App.vue'
import router from './routes/router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

Vue.config.productionTip = false
router.beforeEach(beforeEach);
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
