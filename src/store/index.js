import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectedCoin: '',
        currentPrice: '',
    },
    getters: {},
    mutations: {},
    actions: {}
});