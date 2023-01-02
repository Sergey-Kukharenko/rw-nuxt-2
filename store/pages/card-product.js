export const state = () => ({
  similarBouquets: {},
  recentlyWatched: {},
  popularCategoriesItems: {}
});

export const mutations = {
  setField(state, { name, value }) {
    state[name] = value;
  }
};

export const actions = {
  async fetchCardProductPage({ commit, dispatch }) {
    await Promise.all([
      dispatch('fetchSimilarBouquets'),
      dispatch('fetchRecentlyWatched'),
      dispatch('fetchPopularCategoriesItems')
    ]);
  },

  async fetchSimilarBouquets({ commit }) {
    try {
      const similarBouquets = await this.$axios.$get('/similar-bouquets/');
      commit('setField', { name: 'similarBouquets', value: similarBouquets });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchRecentlyWatched({ commit }) {
    try {
      const recentlyWatched = await this.$axios.$get('/recently-watched/');
      commit('setField', { name: 'recentlyWatched', value: recentlyWatched });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchPopularCategoriesItems({ commit }) {
    try {
      const popularCategoriesItems = await this.$axios.$get('/popular-categories-items/');
      commit('setField', { name: 'popularCategoriesItems', value: popularCategoriesItems });
    } catch (e) {
      console.error(e);
    }
  }
};

export const getters = {
  getSimilarBouquets: (state) => state.similarBouquets,
  getRecentlyWatched: (state) => state.recentlyWatched,
  getPopularCategoriesItems: (state) => state.popularCategoriesItems
};
