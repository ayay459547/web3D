import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
// import style (< Swiper 5.x)
// import 'swiper/dist/css/swiper.css'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
