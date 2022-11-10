<template>
  <footer>
    <app-footer-container />
    <app-footer-bottom />
  </footer>
</template>

<script>
import AppFooterContainer from '@/components/footer/AppFooterContainer'
import AppFooterBottom from '@/components/footer/AppFooterBottom'

export default {
  name: 'AppFooter',

  components: {
    AppFooterBottom,
    AppFooterContainer
  }
}
</script>

<style lang="scss" scoped>
footer {
  background: $bg-grey;

  @include xs {
    padding: 0 16px;
  }
}
</style>
