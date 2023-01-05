import { AUTH_REG_STEPS, AUTH_REG_TYPES } from '~/constants/index';

export const state = () => ({
  steps: {
    currStep: '',
    codeType: ''
  },
  receiver: '',
  token: null
});

export const mutations = {
  setCurrStep(state, payload) {
    state.steps.currStep = payload;
  },

  setCodeType(state, payload) {
    state.steps.codeType = payload;
  },

  setReceiver(state, payload) {
    state.receiver = payload;
  },

  setToken(state, payload) {
    state.token = payload;
  }
};

export const actions = {
  async fetchToken({ commit }) {
    try {
      const { token } = await this.$axios.$get('/session/')
      commit('setToken', token)

      return token
    } catch (err) {
      console.error(err)
    }
  },

  getOtp(_, payload) {
    // return this.$axios.post('/auth', payload)
  },

  login({ commit }, payload) {
    commit('setToken', 'token.12345');
  },

  logout({ commit }, payload) {
    commit('setToken', null);
  }
};

export const getters = {
  currStep: (state) => state.steps.currStep || AUTH_REG_STEPS.auth.component,
  codeType: (state) => state.steps.codeType || AUTH_REG_TYPES[0],
  receiver: (state) => state.receiver,
  phoneMask: (state) => (state.steps.codeType === AUTH_REG_TYPES[0] ? state.receiver.replace(/\d/g, '#') : ''),

  isAuthorized: (state) => !!state.token
};
