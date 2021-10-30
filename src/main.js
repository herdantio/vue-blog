import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import vue quill
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueQuillEditor, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
