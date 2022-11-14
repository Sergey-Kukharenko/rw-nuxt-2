<template>
    <div class="layout">
      <app-reg />
    </div>
  </template>
  
  <script>
  import AppReg from '~/components/header/auth/registration/AppReg';
  
  export default {
    name: 'IndexPage',
  
    components: {
      AppReg,
    },
  
    layout: 'mobile',
  };
  </script>
  