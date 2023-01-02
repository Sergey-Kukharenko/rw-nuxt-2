import { useStringBasedOnDevice } from '~/helpers';

export const actions = {
  async nuxtServerInit({ dispatch, commit, state }, {$cookies}) {
    commit('auth/setToken', $cookies.get('token'))
    await dispatch('auth/fetchToken')

    const token = state.auth.token

    if (token) {
      try {
        // TODO:
      } catch (e) {
        console.error(e);
      }
    }

    await dispatch('cart/fetchCart');

    const suffix = useStringBasedOnDevice(this.$device.isMobileOrTablet, '-mob');
    await dispatch(`layout/fetchLayout`, suffix);
  }
};
