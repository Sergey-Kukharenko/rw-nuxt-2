<template>
  <section class="row layout">
    <div class="info-text">
      <div v-for="(item, index) in content.columns" :key="index" class="info-text__item item">
        <div class="item__title">{{ item.title }}</div>
        <div class="item__text">{{ item.text }}</div>
      </div>
    </div>
    <div class="main-text">{{ content.mainText }}</div>
  </section>
</template>

<script>
export default {
  name: 'AppInfoTextSection',

  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;

  @include gt-sm {
    gap: 134px;
  }

  @include lt-md {
    gap: 20px;
    flex-direction: column;
  }

  & > div {
    flex: 1;
  }

  .info-text {
    display: flex;

    @include gt-sm {
      gap: 51px;
      max-width: 419px;
    }

    @include lt-md {
      gap: 16px;
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
      border-top: 1px solid $color-dark-grey;

      @include gt-sm {
        padding-top: 12px;
      }

      @include lt-md {
        padding-top: 4px;
      }

      &__title {
        font-family: $golos-medium;
        font-style: normal;
        font-weight: 600;
        color: $color-dark-grey;

        @include gt-sm {
          font-size: 46px;
          line-height: 40px;
        }

        @include lt-md {
          font-size: 28px;
          line-height: 32px;
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
      }
    }
  }

  .main-text {
    font-family: $Literata;
    font-style: normal;
    font-weight: 700;
    color: $color-dark-grey;

    @include gt-sm {
      width: 528px;
      font-size: 48px;
      line-height: 56px;
    }

    @include lt-md {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.01em;
    }
  }
}
</style>
