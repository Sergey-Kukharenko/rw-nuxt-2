import { useStringBasedOnDevice } from '~/helpers';

export const actions = {
  async nuxtServerInit({ dispatch, state }, { $cookies }) {
    const newToken = await dispatch('auth/fetchToken');
    $cookies.set('token', newToken);

    const { token } = state.auth;

    if (token) {
      try {
        const suffix = useStringBasedOnDevice(this.$device.isMobileOrTablet, '-mob');
        await dispatch('cart/fetchCart');
        await dispatch('favorites/fetchFavorites');
        await dispatch(`layout/fetchLayout`, suffix);
      } catch (e) {
        console.error(e);
      }
    }
  }
};
