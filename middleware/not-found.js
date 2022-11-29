export default function ({$axios, redirect}) {
  $axios.onError(error => {
    if (error.response === undefined) {
      redirect('/not-found');
    }

    if (error.response.status >= 400) {
      redirect('/not-found');
    }
  });
}
