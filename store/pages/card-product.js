export const state = () => ({
  similarBouquets: {}
});

export const mutations = {
  setField(state, { name, value }) {
    state[name] = value;
  }
};

export const actions = {
  async fetchCardProductPage({ commit, dispatch }) {
    await Promise.all([dispatch('fetchSimilarBouquets')]);
  },

  async fetchSimilarBouquets({ commit }) {
    try {
      const similarBouquets = await this.$axios.$get('/similar-bouquets/');
      commit('setField', { name: 'similarBouquets', value: similarBouquets });
    } catch (e) {
      console.error(e);
    }
  }
};

export const getters = {
  getSimilarBouquets: (state) => state.similarBouquets
};
