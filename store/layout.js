export const state = () => ({
  navigation: {},
  navBar: [],
  footer: {}
});

export const mutations = {
  setField(state, { name, value }) {
    state[name] = value;
  }
};

export const actions = {
  async fetchLayout({ commit, dispatch }, suffix) {
    console.log(suffix);
    await Promise.all([dispatch('fetchNavigation', suffix), dispatch('fetchNavBar', suffix), dispatch('fetchFooter')]);
  },

  async fetchNavigation({ commit }, suffix) {
    try {
      const navigation = await this.$axios.$get(`/navigation${suffix}/`);
      commit('setField', { name: 'navigation', value: navigation });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchNavBar({ commit }, suffix) {
    try {
      const navBar = await this.$axios.$get(`/nav-bar${suffix}/`);
      commit('setField', { name: 'navBar', value: navBar });
    } catch (e) {
      console.error(e);
    }
  },

  async fetchFooter({ commit }) {
    try {
      const footer = await this.$axios.$get('/footer/');
      commit('setField', { name: 'footer', value: footer });
    } catch (e) {
      console.error(e);
    }
  }
};

export const getters = {
  getNavigation: (state) => state.navigation,
  getNavBar: (state) => state.navBar,
  getFooter: (state) => state.footer
};
