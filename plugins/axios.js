export default function ({ store, app: { $axios }, redirect }) {
  $axios.create({
    baseURL: process.env.BASE_URL || 'https://dev-api.myflowers.co.uk/v1',
    timeout: 60000,
    // withCredentials: true
  })

  // $axios.onRequest((config) => {
  //   return config
  // })

  // $axios.onError((error) => {
  //   return error
  // })
}