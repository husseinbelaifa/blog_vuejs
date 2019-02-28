import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    posts: [],
    url: ""
  },
  mutations: {
    change(state, search) {
      state.search = search;
    },

    change_post(state, posts) {
      state.posts = posts;
    },
    change_url(state, url) {
      state.url = url;
    }
  },
  actions: {},
  getters: {
    search: state => state.search,
    posts: state => state.posts,
    url: state => state.url
  }
});
