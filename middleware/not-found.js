export default function ({$axios, redirect}) {
  $axios.onError(error => {
    if (error.response.status != null) {
      console.log(error.response);
      console.log(error.response.status);

      redirect('/not-found');

      // if (error.response.status >= 400) {
      //   redirect('/not-found');
      // }
    }

  });
}
