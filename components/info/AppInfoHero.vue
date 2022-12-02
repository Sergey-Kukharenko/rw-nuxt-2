<template>
  <div class="hero">
    <div class="container layout">
      <div class="hero__items">
        <div v-for="(item, index) in items" :key="index" class="hero__item">
          <div class="hero__item-title">{{ item.title }}</div>
          <div class="hero__item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInfoHero',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background: #f7f7f7;

  @include gt-sm {
    padding: 40px 0;
  }

  @include lt-md {
    padding: 32px 0;
  }

  &__items {
    display: flex;

    @include lt-md {
      flex-direction: column;
      gap: 32px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;

    &-title {
      font-family: $golos-medium;
      font-style: normal;
      font-weight: 600;
      color: $color-dark-green;

      @include gt-sm {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.01em;
      }

      @include lt-md {
        font-size: 20px;
        line-height: 24px;
      }
    }

    &-text {
      flex: 1;
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
    }
  }
}
</style>
