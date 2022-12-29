import { useStringBasedOnDevice } from '~/helpers';

export const actions = {
  async nuxtServerInit({ dispatch, state }) {
    await dispatch('auth/fetchToken')

    const { token } = state.auth

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
