import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bus: "start"
  },
  mutations: {
    setBus(state, str) {
      state.bus = str;
    }
  },
  actions: {},
  modules: {}
});
