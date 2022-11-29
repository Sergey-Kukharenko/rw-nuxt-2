export default function ({$axios, redirect}) {
  $axios.onError(error => {
    if (error.response.status >= 400) {
      console.log(error.response.status === 502);
      redirect('/not-found');
    }
  });
}
