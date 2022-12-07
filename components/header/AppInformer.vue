<template>
  <figure class="informer">
    <svg-icon name="opening-hours" class="informer__icon" />
    <figcaption class="informer__text">
      {{ title }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'AppInformer',

  data() {
    return {
      title: 'We work daily for 24 hours without a break'
    }
  }
}
</script>

<style lang="scss" scoped>
.informer {
  @include gt-sm {
    display: flex;
    align-items: center;
  }

  @include lt-md {
    display: none;
  }

  &__icon {
    @include gt-sm {
      flex-shrink: 0;
      width: 16.07px;
      height: 17.14px;
      fill: $color-dark-grey;
    }
  }

  &__text {
    @include gt-sm {
      flex: 1;
      max-width: 165px;
      font-family: $golos-medium;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -.01em;
      color: $color-dark-grey;
      margin-left: 14px;
    }
  }
}
</style>
