import Vue from "vue";
import Vuex from "vuex";
import ArticleData from "@/types/ArticleData";
import { generatedArticles } from "@/fixtures/ArticleFixture";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    retrievedArticles: Array<ArticleData>()
  },
  mutations: {
    getArticlesFromDatabase(state) {
      state.retrievedArticles = generatedArticles;
    }
  },
  actions: {},
  modules: {}
});
