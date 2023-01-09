export const state = () => ({
  category: null,
  categories: null
})

export const mutations = {
  setState(state, payload) {
    Object.keys(payload).forEach((key) => {
      if (key in state) {
        state[key] = payload[key];
      }
    });
  },

  setProductList(state, { list, pagination }) {
    state.category = {
      ...state.category,
      list: [...state.category.list, ...list],
      pagination
    }
  }
}

export const actions = {
  async fetchCategory({ commit }, { slug, params, isConcated = false }) {
    try {
      const res = await this.$axios.$get(`/category/${slug}/`, { params })

      if (!isConcated) {
        commit('setState', { category: res })

        return
      }

      commit('setProductList', res)
    } catch (err) {
      console.error(err)
    }
  },

  async fetchCategories({ commit }, { params }) {
    try {
      const res = await this.$axios.$get(`/categories/`, { params })
      commit('setState', { categories: res })
    } catch (err) {
      console.error(err)
    }
  },
}

export const getters = {
  getCategory: (state) => state.category,
  getCategories: (state) => state.categories
}