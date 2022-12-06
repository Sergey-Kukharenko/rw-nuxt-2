export default function ({$axios, redirect}) {
  $axios.onError(error => {
    if (!error.response || error.response.status >= 400) {
      redirect('/not-found');
    }
  });
}
