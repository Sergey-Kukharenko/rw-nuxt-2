<template>
  <div>
    <app-search-box />
  </div>
</template>

<script>
import AppSearchBox from '~/components/header/search/AppSearchBox';

export default {
  name: 'IndexPage',
  components: {AppSearchBox},
  layout: 'custom'
};
</script>
