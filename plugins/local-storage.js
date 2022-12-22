import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store, isDev }) => {
  createPersistedState({
    key: 'session-token',
    paths: [
      'auth.token',
    ],
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 7, secure: !isDev }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}