import { useArrayUniqueByKey, useCollectionUniqueByKey, useFixedSumByKey, useWithExcludedKeys } from '~/helpers';

export const state = () => ({
  cart: {}
});

export const mutations = {
  setCart(state, payload) {
    state.cart = payload;
  }
};

export const actions = {
  async fetchCart({ state, commit }) {
    try {
      const { data } = await this.$axios.$get('/basket/');
      const formattedData = useWithExcludedKeys(data, ['object', 'id', 'positions']);
      commit('setCart', formattedData);
    } catch (e) {
      console.error(e);
    }
  },

  async addToCart({ state, commit }, { productId, positionSlug }) {
    try {
      const { data } = await this.$axios.$post(`/basket/${productId}/${positionSlug}`);
      const formattedData = useWithExcludedKeys(data, ['object', 'id', 'positions']);
      commit('setCart', formattedData);
    } catch (e) {
      console.error(e);
    }
  },

  async removeFromCart({ state, commit }, { productId, positionSlug }) {
    try {
      const { data } = await this.$axios.$delete(`/basket/${productId}/${positionSlug}`);
      const formattedData = useWithExcludedKeys(data, ['object', 'id', 'positions']);
      commit('setCart', formattedData);
    } catch (e) {
      console.error(e);
    }
  }
};

export const getters = {
  getCount: (state) => Object.values(state.cart).length,
  getPrice: (state) => useFixedSumByKey(state.cart, 'price.amount', 3),
  getAniqueCollection: (state) => useCollectionUniqueByKey(state.cart, 'title'),
  getUniqueArray: (state) => useArrayUniqueByKey(state.cart, 'title'),
  getUniqueCount: (state, getter) => getter.getUniqueArray.length
};
