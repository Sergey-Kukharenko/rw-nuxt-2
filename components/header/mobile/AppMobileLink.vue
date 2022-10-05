<template>
  <a class="link">
    <span class="link__text">
      {{ link.text }}
    </span>
    <svg-icon name="arrow-left" class="link__icon"/>
  </a>
</template>

<script>
export default {
  name: 'AppMobileLink',

  props: {
    link: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #F7F7F7;
  border-radius: 10px;
  box-sizing: border-box;
  color: $color-dark-green;

  &__text {
    font-family: $golos-medium;
    font-size: 12px;
    line-height: 16px;
  }

  &__icon {
    width: 12px;
    height: 16px;
    transform: rotate(180deg);
  }
}
</style>
