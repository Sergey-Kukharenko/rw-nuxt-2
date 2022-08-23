<template>
  <div :class="classNames">
    <div class="layout layout--horizontal-dt">
      <div class="notification__title">
        {{ notification.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { useClassName } from '@/composables/useClassName';
import dataNotification from '@/data/notification';

export default {
  name: 'AppNotification',

  data() {
    return {
      notification: {
        title: dataNotification.title
      },

      options: {
        theme: dataNotification.theme
      }
    };
  },
  computed: {
    classNames() {
      return useClassName(this.options, 'notification');
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  background: $color-red;

  &__title {
    font-family: $lora;
    font-style: normal;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.01em;
    text-align: center;

    @include gt-xs {
      font-size: 14px;
      line-height: 24px;
      padding: 10px 0;
    }

    @include xs {
      max-width: 230px;
      font-size: 13px;
      line-height: 16px;
      padding: 8px 6px;
      margin: 0 auto;
      box-sizing: border-box;
    }
  }
}

.notification--pink {
  background: $color-red;
}

.notification--green {
  background: $color-dark-green;
}
</style>
