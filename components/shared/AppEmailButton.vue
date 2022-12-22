<template>
  <a :href="`mailto:${$options.EMAIL}`" class="email">
    <svg-icon name="mail" class="email__icon" />
    <span class="email__text">{{ $options.EMAIL }}</span>
  </a>
</template>

<script>
import { EMAIL } from '~/constants';

export default {
  name: 'AppEmailButton',

  EMAIL
};
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  align-items: center;
  gap: 11px;
  background: #ffffff;
  border-radius: 10px;
  height: 48px;
  padding: 0 18px;
  box-sizing: border-box;

  &__icon {
    width: 18px;
    height: 18px;
  }

  &__text {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
  }
}
</style>
