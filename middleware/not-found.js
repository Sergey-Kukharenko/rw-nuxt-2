export default function ({$axios, redirect}) {
  $axios.onError(error => {
    console.log('middleware');
    console.log(error);
    // console.log(error.response.status);
    if (error.response === undefined) {
      redirect('/not-found');
    }

    if (error.response.status >= 400) {
      redirect('/not-found');
    }
  });
}
