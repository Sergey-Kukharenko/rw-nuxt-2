<template>
  <div class="toast-card">
    <svg-icon v-if="isIcon" :name="icon.name" v-bind="icon.size" class="toast-card__icon" />
    <img v-if="isImg" :src="img.src" v-bind="img.size" :alt="img.src" class="toast-card__img" />
    <div class="toast-card__caption">
      <div v-if="title" class="toast-card__caption-title">
        {{ title }}
      </div>
      <div v-if="text" class="toast-card__caption-text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import { useObjectNotEmpty } from '~/helpers';

export default {
  name: 'ToastCardDeals',
  props: {
    icon: {
      type: Object,
      default: () => ({})
    },

    img: {
      type: Object,
      default: () => ({})
    },

    title: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    }
  },

  computed: {
    isIcon() {
      return useObjectNotEmpty(this.icon);
    },

    isImg() {
      return useObjectNotEmpty(this.img);
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

  &__img {
    border-radius: 8px;
    overflow: hidden;
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
    margin-bottom: 4px;
  }

  &__caption-text {
    font-family: $golos-regular;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: -0.01em;
  }
}

.toast--height-small {
  & .toast-card__caption-text {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
