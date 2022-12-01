<template>
  <div class="toast-card">
    <svg-icon v-if="icon" :name="icon.name" v-bind="icon.size" class="toast-card__icon"/>
    <div class="toast-card__caption">
      <div class="toast-card__caption-title">
        {{ title }}
      </div>
      <div class="toast-card__caption-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToastCardDeals',
  props: {
    icon: {
      type: Object,
      default: () => ({})
    },

    title: {
      type: String,
      default: '',
    },

    text: {
      type: String,
      default: '',
    }
  }
};
</script>

<style lang="scss" scoped>
.toast-card {
  display: flex;
  align-items: center;

  &__icon {
    flex-shrink: 0;
  }

  &__caption {
    flex: 1;
    margin: 0 24px 0 12px;
  }

  &__caption-title {
    font-family: $golos-medium;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.01em;
  }

  &__caption-text {
    font-family: $golos-regular;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
    margin-top: 4px;
  }
}
</style>
