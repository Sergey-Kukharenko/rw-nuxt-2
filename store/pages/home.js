export const state = () => ({
  promotions: [],
  popularCategories: [],
  bestBouquets: {},
  recipient: {},
  specialOffers: {},
  reviews: [],
  underPounds: {},
  shopByPrice: {},
  autumnCollection: {},
  benefits: [],
  pickBouquet: {},
  faq: [],
  info: {}
});

export const mutations = {
  setField(state, { name, value }) {
    state[name] = value;
  }
};

export const actions = {
  async fetchMainPage({ commit, dispatch }) {
    await Promise.all([
      dispatch('fetchPromotions'),
      dispatch('fetchPopularCategories'),
      dispatch('fetchBestBouquets'),
      dispatch('fetchRecipient'),
      dispatch('fetchSpecialOffers'),
      dispatch('fetchReviews'),
      dispatch('fetchUnderPounds'),
      dispatch('fetchShopByPrice'),
      dispatch('fetchAutumnCollection'),
      dispatch('fetchBenefits'),
      dispatch('fetchPickBouquet'),
      dispatch('fetchFaq'),
      dispatch('fetchInfo')
    ]);
  },

  async fetchPromotions({ commit }) {
    try {
      const promotions = await this.$axios.$get('/promotions/');
      commit('setField', { name: 'promotions', value: promotions });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchPopularCategories({ commit }) {
    try {
      const popularCategories = await this.$axios.$get('/popular-categories/');
      commit('setField', { name: 'popularCategories', value: popularCategories });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchBestBouquets({ commit }) {
    try {
      const bestBouquets = await this.$axios.$get('/best-bouquets/');
      commit('setField', { name: 'bestBouquets', value: bestBouquets });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchRecipient({ commit }) {
    try {
      const recipient = await this.$axios.$get('/recipient/');
      commit('setField', { name: 'recipient', value: recipient });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchSpecialOffers({ commit }) {
    try {
      const specialOffers = await this.$axios.$get('/special-offers/');
      commit('setField', { name: 'specialOffers', value: specialOffers });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchReviews({ commit }) {
    try {
      const reviews = await this.$axios.$get('/reviews/');
      commit('setField', { name: 'reviews', value: reviews });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchUnderPounds({ commit }) {
    try {
      const underPounds = await this.$axios.$get('/under-pounds/');
      commit('setField', { name: 'underPounds', value: underPounds });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchShopByPrice({ commit }) {
    try {
      const shopByPrice = await this.$axios.$get('/shop-by-price/');
      commit('setField', { name: 'shopByPrice', value: shopByPrice });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchAutumnCollection({ commit }) {
    try {
      const autumnCollection = await this.$axios.$get('/autumn-collection/');
      commit('setField', { name: 'autumnCollection', value: autumnCollection });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchBenefits({ commit }) {
    try {
      const benefits = await this.$axios.$get('/benefits/');
      commit('setField', { name: 'benefits', value: benefits });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchPickBouquet({ commit }) {
    try {
      const pickBouquet = await this.$axios.$get('/pick-bouquet/');
      commit('setField', { name: 'pickBouquet', value: pickBouquet });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchFaq({ commit }) {
    try {
      const faq = await this.$axios.$get('/faq/');
      commit('setField', { name: 'faq', value: faq });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchInfo({ commit }) {
    try {
      const info = await this.$axios.$get('/info/');
      commit('setField', { name: 'info', value: info });
    } catch (e) {
      console.error(e);
    }
  }
};

export const getters = {
  getPromotions: (state) => state.promotions,
  getPopularCategories: (state) => state.popularCategories,
  getBestBouquets: (state) => state.bestBouquets,
  getRecipient: (state) => state.recipient,
  getSpecialOffers: (state) => state.specialOffers,
  getReviews: (state) => state.reviews,
  getUnderPounds: (state) => state.underPounds,
  getShopByPrice: (state) => state.shopByPrice,
  getAutumnCollection: (state) => state.autumnCollection,
  getBenefits: (state) => state.benefits,
  getPickBouquet: (state) => state.pickBouquet,
  getFaq: (state) => state.faq,
  getInfo: (state) => state.info
};
