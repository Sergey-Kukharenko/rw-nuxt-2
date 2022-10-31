export const state = () => ({
  cart: {
    items: [],
    price: null,
    count: null
  }
});

export const mutations = {
  ADD_TO_CART(state, payload) {
    state.cart.items.push(payload);
  },

  UPDATE_CART(state) {
    state.cart = {
      ...state.cart,
      price: `£ ${state.cart.items.reduce((acc, val) => (acc + val.price.amount), 0)}`,
      count: state.cart.items.length,
    };
  },

  REMOVE_FROM_CART(state, payload) {
    state.cart.items.splice(state.cart.items.indexOf(payload), 1);
  },
};

export const actions = {
  addToCart({state, commit}, payload) {
    // const { cart: newCart } = await this.$axios.$post('/carts')
    commit('ADD_TO_CART', payload);
    commit('UPDATE_CART');
  },

  removeFromCart({state, commit}, payload) {
    commit('REMOVE_FROM_CART', payload);
  },
};

export const getters = {
  cart: state => state.cart
};
