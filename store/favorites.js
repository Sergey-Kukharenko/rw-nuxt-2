export const state = () => ({
  favorites: {}
});

export const mutations = {
  setFavorites(state, payload) {
    state.favorites = payload;
  }
};

export const actions = {
  async fetchFavorites({ state, commit }) {
    try {
      const favorites = await this.$axios.$get('/favorites/');
      commit('setFavorites', favorites);
    } catch (e) {
      console.error(e);
    }
  },

  async addToFavorites({ state, commit }, productId) {
    try {
      const favorites = await this.$axios.$post(`/favorite/${productId}`);
      commit('setFavorites', favorites);
    } catch (e) {
      console.error(e);
    }
  },

  async removeFromFavorites({ state, commit }, productId) {
    try {
      const favorites = await this.$axios.$delete(`/favorite/${productId}`);
      commit('setFavorites', favorites);
    } catch (e) {
      console.error(e);
    }
  }
};

export const getters = {
  getCount: (state) => state.favorites?.list?.length,
  getFavorites: (state) => state.favorites
};
