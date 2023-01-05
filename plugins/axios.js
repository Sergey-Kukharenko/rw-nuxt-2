import * as AxiosLogger from 'axios-logger';

export default function ({ store, app: { $axios }, isDev, $cookies }) {
  $axios.create({
    baseURL: process.env.BASE_URL || 'https://dev-api.myflowers.co.uk/v1',
    timeout: 60000,
    // withCredentials: true
  });

  AxiosLogger.setGlobalConfig({
    data: false
  });

  $axios.onRequest((config) => {
    const token = $cookies.get('token')

    config.headers.Authorization = token ? `Bearer ${token}` : ''

    return isDev ? AxiosLogger.requestLogger(config) : config
  })

  $axios.onResponse((response) => {
    return isDev ? AxiosLogger.responseLogger(response) : response
  })

  $axios.onError(
    // async
    (error) => {
      const statusCode = error?.response?.status

      if ([401, 403].includes(statusCode)) {
        // await store.dispatch('auth/fetchToken')
      }

      return isDev ? AxiosLogger.errorLogger(error) : error
    })

}
