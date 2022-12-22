import * as AxiosLogger from 'axios-logger';

export default function ({ store, app: { $axios }, redirect }) {
  $axios.create({
    baseURL: process.env.BASE_URL || 'https://dev-api.myflowers.co.uk/v1',
    timeout: 60000
    // withCredentials: true
  });
  AxiosLogger.setGlobalConfig({
    data: false
  });

  $axios.onRequest((config) => {
    const auth = store.state.auth

    config.headers.Authorization = auth.token ? `Bearer ${auth.token}` : ''

    return AxiosLogger.requestLogger(config)
  })

  $axios.onResponse(AxiosLogger.responseLogger)

  $axios.onError(async (error) => {
    const statusCode = error?.response?.status

    if (statusCode === 401) {
      await store.dispatch('auth/fetchToken')
    }

    return AxiosLogger.errorLogger(error)
  })

}
