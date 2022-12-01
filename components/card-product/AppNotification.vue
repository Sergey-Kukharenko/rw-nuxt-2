<template>
  <div class="notification" :style="notification.style">
    <svg-icon v-if="notification.icon" :name="notification.icon" class="notification__icon" />
    <div class="notification__text">{{ notification.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppNotification',
  props: {
    notification: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  @include gt-xs {
    display: none;
  }

  @include xs {
    display: flex;
    align-items: flex-start;
    padding: 7px 19.33px;
    margin: 0 -14px;
    box-sizing: border-box;
  }

  &__icon {
    display: block;
    width: 10px;
    height: 14px;
    margin-right: 11px;
    color: #FCBC00;
  }

  &__text {
    max-width: 190px;
    font-family: $golos-regular;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
  }
}
</style>
