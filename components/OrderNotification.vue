<template>
  <div class="notification">
    <img src="/icons/flash.png" alt="img" class="notification__img" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'OrderNotification',
};
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 14px 28px;
  background: #fff3d9;
  border-radius: 10px;

  @include lt-md {
    gap: 12px;
    padding: 12px 16px;
  }

  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: $color-dark-grey;

  &__img {
    width: 28px;
    height: 28px;

    @include lt-md {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
