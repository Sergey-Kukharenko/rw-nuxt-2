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
import { useClassName } from '@/helpers';
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
    color: #ffffff;
    letter-spacing: -0.01em;
    text-align: center;

    @include gt-sm {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      padding: 10px 0;
    }

    @include lt-sm {
      max-width: 230px;
      font-weight: 500;
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
