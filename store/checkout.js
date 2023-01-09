export const state = () => ({
  checkout: null,
  isPaid: false,
  paymentMethod: 'stripe'
});

export const mutations = {
  setState(state, payload) {
    Object.keys(payload).forEach((key) => {
      if (key in state) {
        state[key] = payload[key];
      }
    });
  },
};

export const actions = {
  async fetchCheckout({ commit }) {
    try {
      const { data } = await this.$axios.$get('/checkout/')
      commit('setState', { checkout: data })
    } catch (err) {
      console.error(err)
    }
  },

  async fetchPaidCheckout({ commit }) {
    try {
      const { data } = await this.$axios.$get('/checkout/payment/paid/')
      commit('setState', { isPaid: data?.success ?? false })
    } catch (err) {
      console.error(err)
    }
  },

  setCheckoutRecipent(_, payload) {
    try {
      this.$axios.$post('/checkout/recipient/', payload)
    } catch (err) {
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
  isPaidOrder: (state) => state.isPaid,
  getPaymentMethod: (state) => state.paymentMethod
}