import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    posts: [],
    comments: [],
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
    },
    change_comment(state, comments) {
      state.comments = comments;
    }
  },
  actions: {},
  getters: {
    search: state => state.search,
    posts: state => state.posts,
    url: state => state.url,
    comments: state => state.comments
  }
});
