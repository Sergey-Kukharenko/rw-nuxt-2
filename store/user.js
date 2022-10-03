export const state = () => ({
  authorized: true,
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
  }
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
  state: state => state
}
