export const state = () => ({
  authorized: false,
  fullName: 'Alfred Penniworth',
  bonuses: '1 280',
  searchHistory: [
    'Tulips',
    'Happy birthday',
    'Roses',
    'Bouquet with roses',
    'Peonies roses',
    'Bouquets under £30',
    'Cheap bouquets'
  ],
  user: null,

  recipient: null
});

export const mutations = {
  setField(state, { name, value }) {
    state[name] = value;
  },

  addToHistory(state, payload) {
    state.searchHistory.push(payload);
  },

  removeFromHistory(state, payload) {
    state.searchHistory.splice(state.searchHistory.indexOf(payload), 1);
  }
};

export const actions = {
  setAuthData({ commit }, payload) {
    commit('setField', { name: 'authorized', value: true });
    commit('setField', { name: 'user', value: payload });
  },

  logout({ commit }) {
    commit('setField', { name: 'authorized', value: false });
  },

  setRecipient({ commit }, payload) {
    commit('setField', { name: 'recipient', value: payload });
  }
};

export const getters = {
  state: (state) => state,
  getSearchHistory: (state) => state.searchHistory,
  getRecipient: (state) => state.recipient
};
