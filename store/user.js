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
    'Cheap bouquets',
  ]
})

export const mutations = {
  setAuth(state, payload) {
    state.authorized = payload
  },

  addToHistory(state, payload) {
    state.searchHistory.push(payload)
  },

  removeFromHistory(state, payload) {
    state.searchHistory.splice(state.searchHistory.indexOf(payload), 1)
  },
}

export const actions = {
  login({commit}) {
    commit('setAuth', true)
  },

  logout({commit}) {
    commit('setAuth', false)
  },
}

export const getters = {
  state: state => state,
  searchHistory: state => state.searchHistory,
}
