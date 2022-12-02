export const state = () => ({
  cart: {
    items: [],
    price: null,
    count: null
  }
});

export const mutations = {
  ADD_TO_CART(state, payload) {
    const duplicate = state.cart.items.find(item => item.title === payload.title);

    if(duplicate) {
      duplicate.qty += payload.qty
    } else {
      state.cart.items.push(payload)
    }
  },


  /*
   UPDATE_CART будет удален, как только будет готов backend
  */
  UPDATE_CART(state) {
    state.cart = {
      ...state.cart,
      price: `£ ${state.cart.items.reduce((acc, val) => (acc + (val.price.amount * val.qty)), 0)}`,
      count: state.cart.items.reduce((acc, val) => (acc + val.qty), 0),
    };
  },

  REMOVE_FROM_CART(state, payload) {
    state.cart.items.splice(state.cart.items.indexOf(payload), 1);
  },

  UPDATE_CART_QTY(state, payload) {
    state.cart.items.forEach(item => ((item.title === payload.title) && Object.assign(item, payload)));
  },
};

export const actions = {
  addToCart({state, commit}, payload) {
    // будет запрос
    commit('ADD_TO_CART', {...payload, qty: 1});
    commit('UPDATE_CART');
  },

  removeFromCart({state, commit}, payload) {
    commit('REMOVE_FROM_CART', payload);
    commit('UPDATE_CART');
  },

  updateCartQty({state, commit}, payload) {
    commit('UPDATE_CART_QTY', payload);
    commit('UPDATE_CART');
  },
};

export const getters = {
  cart: state => state.cart,
  price: state => state.cart.price,
  items: state => state.cart.items,
};
