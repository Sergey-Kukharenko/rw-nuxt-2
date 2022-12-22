<template>
  <div class="card" :style="{ background: bgColor }">
    <div v-if="number" class="card__number">{{ number }}</div>
    <div class="card__content">
      <div>
        <slot name="title" />
      </div>
      <div>
        <slot name="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInfoCard',

  props: {
    number: {
      type: [Number, String],
      default: ''
    },

    bgColor: {
      type: String,
      default: '#F7F7F7'
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 24px;

  flex: 1;

  @include gt-sm {
    gap: 24px;
    min-height: 250px;
  }

  @include lt-md {
    gap: 16px;
  }

  &__number {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 50%;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    user-select: none;

    @include gt-sm {
      width: 26px;
      height: 26px;
      font-size: 14px;
      line-height: 20px;
    }

    @include lt-md {
      width: 20px;
      height: 20px;
      font-size: 11px;
      line-height: 16px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    @include gt-sm {
      gap: 26px;
    }

    @include lt-md {
      gap: 12px;
    }
  }
}
</style>
