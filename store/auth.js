import { AUTH_REG_STEPS } from '~/constants/index';

export const state = () => ({
  step: '',
  receiver: '',
})

export const mutations = {
  setCurrStep(state, payload) {
    state.step = payload
  },

  setReceiver(state, payload) {
    state.receiver = payload
  }
}

export const actions = {
  signIn({ dispatch }, payload) {
    dispatch('user/setAuthData', payload, { root: true })
  }
}

export const getters = {
  currStep: (state) => state.step || AUTH_REG_STEPS.auth.component,
  receiver: (state) => state.receiver
}
