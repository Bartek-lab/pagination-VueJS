import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    searchValue: "",
    isSorted: true,
  },

  mutations: {
    SET_Posts(state, posts) {
      state.posts = posts;
    },
    DELETE_Post(state, id) {
      let index = state.posts.findIndex((p) => p.id == id.id);
      state.posts.splice(index, 1);
    },
    SET_Searched(state, val) {
      state.searchValue = val;
    },
    SET_Sorted(state, val) {
      state.isSorted = val;
    },
  },
  actions: {
    async loadPosts({ commit }) {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.data)
        .then((posts) => {
          commit("SET_Posts", posts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deletePost({ commit }, id) {
      await axios
        .delete("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((response) => {
          console.log(response), commit("DELETE_Post", id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  getters: {
    sorted: (state) => {
      if (state.isSorted) {
        return state.posts.sort((a, b) => a.id - b.id);
      }
      if (!state.isSorted) {
        return state.posts.sort((a, b) => b.id - a.id);
      }
    },
    filtered: (state) => {
      return state.posts.filter((post) =>
        post.title.toLowerCase().includes(state.searchValue.toLowerCase())
      );
    },
    getPosts: (state) => {
      return state.posts;
    },
  },
});
