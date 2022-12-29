export const state = () => ({
  checkout: null
});

export const mutations = {
  setField(state, { name, value }) {
    state[name] = value;
  }
};

export const actions = {
  async fetchCheckout({ commit }) {
    try {
      const {data} = await this.$axios.$get('/checkout/')
      commit('setField', { name: 'checkout', value: data })
    } catch (err) {
      console.error(err)
    }
  },

  setCheckoutRecipent(_, payload) {
    try {
      this.$axios.$post('/checkout/recipient/', payload)
    } catch(err) {
      console.error(err)
    }
  },

  setCheckoutToPay() {
    try {
      this.$axios.$post('/checkout/to-pay/')
    } catch (err) {
      console.error(err)
    }
  },

  setCheckoutAddress(_, address) {
    try {
      this.$axios.$post('/checkout/address/', address)
    } catch (err) {
      console.error(err)
    }
  },

  setCheckoutInterval(_, interval) {
    try {
      this.$axios.$post('/checkout/interval/', interval)
    } catch (err) {
      console.error(err)
    }
  },

  setCheckoutOther(_, payload) {
    try {
      this.$axios.$post('/checkout/other/', payload)
    } catch (err) {
      console.error(err)
    }
  }
}

export const getters = {
  getCheckout: (state) => state.checkout,
}