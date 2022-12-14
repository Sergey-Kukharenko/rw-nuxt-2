export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    if (!error.response || error.response.status === 404) {
      redirect('/not-found');
    }
  });
}
