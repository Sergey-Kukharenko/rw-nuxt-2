export const state = () => ({
  cart: {
    items: [],
    price: null,
    count: null
  }
});

export const mutations = {
  ADD_TO_CART(state, payload) {
    // state.cart.items.push(payload);

    const duplicate = state.cart.items.find(item => item.title === payload.title)
    if(duplicate) {
      duplicate.qty++
    } else {
      state.cart.items.push({
        ...payload,
        qty: 1
      })
    }

    // reduce

  },

  UPDATE_CART(state) {
    state.cart = {
      ...state.cart,
      price: `£ ${state.cart.items.reduce((acc, val) => (acc + (val.price.amount * val.qty)), 0)}`,
      count: state.cart.items.length,
    };
  },

  REMOVE_FROM_CART(state, payload) {
    state.cart.items.splice(state.cart.items.indexOf(payload), 1);
  },
};

export const actions = {
  addToCart({state, commit}, payload) {
    // const res = await this.$axios.$post('https://dev-api.myflowers.co.uk/v1/cart', payload)

    commit('ADD_TO_CART', payload);
    commit('UPDATE_CART');
  },

  removeFromCart({state, commit}, payload) {
    commit('REMOVE_FROM_CART', payload);
    commit('UPDATE_CART');
  },
};

export const getters = {
  cart: state => state.cart
};
