import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgImg: ""
  },
  mutations: {
    changeImgUrl(state, url){
      state.bgImg = url
    }
  },
  actions: {
  },
  modules: {
  }
})
