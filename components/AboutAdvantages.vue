<template>
  <div class="advantages layout">
    <div class="advantages__title">Advantages</div>
    <div class="advantages__items">
      <div v-for="(item, index) in $options.ADVANTAGES" :key="index" class="advantages__item item">
        <div class="item__pic" :style="{ background: item.color }">
          <svg-icon :name="item.icon" class="item__icon" />
        </div>
        <div class="item__content">
          <div class="item__title">
            {{ item.title }}
          </div>
          <div class="item__text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ADVANTAGES } from '~/data/about';

export default {
  name: 'AboutAdvantages',

  ADVANTAGES,
};
</script>

<style lang="scss" scoped>
.advantages {
  display: flex;
  flex-direction: column;

  @include gt-sm {
    gap: 33px;
    width: 1080px;
  }

  @include lt-md {
    gap: 24px;
  }

  &__title {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    color: $color-dark-grey;

    @include gt-sm {
      font-size: 48px;
      line-height: 70px;
    }

    @include lt-md {
      font-size: 21px;
      line-height: 31px;
    }
  }

  &__items {
    display: flex;

    @include lt-md {
      flex-direction: column;
      gap: 34px;
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;

      @include lt-md {
        align-items: center;
      }

      &__content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      &__pic {
        border-radius: 50%;

        @include gt-sm {
          width: 120px;
          height: 120px;
          margin-left: 20px;
        }

        @include lt-md {
          width: 90px;
          height: 90px;
        }
      }

      &__icon {
        position: relative;
        top: -10px;
        left: -20px;
        width: 100px;
        height: 100px;
      }

      &__title {
        font-family: $golos-medium;
        font-style: normal;
        font-weight: 600;
        color: $color-dark-grey;

        @include gt-sm {
          font-size: 20px;
          line-height: 24px;
        }

        @include lt-md {
          font-size: 16px;
          line-height: 20px;
          text-align: center;
        }
      }

      &__text {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-dark-grey;

        @include gt-sm {
          white-space: pre-wrap;
        }

        @include lt-md {
          text-align: center;
        }
      }
    }
  }
}
</style>
