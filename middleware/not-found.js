export default function ({$axios, redirect}) {
  $axios.onError(error => {
    console.log('middleware');
    console.log(error);
    // console.log(error.response.status);
    if (error.response.status >= 400) {
      redirect('/not-found');
    }
  });
}
