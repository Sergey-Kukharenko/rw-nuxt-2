<template>
  <div class="rating">
    <div class="rating__amount">{{ value }}</div>
    <svg-icon
      class="rating__icon"
      name="star"
    />
  </div>
</template>

<script>
export default {
  name: "BasketProductRating",
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;

  @include lt-lg {
    flex-direction: row-reverse;
  }

  &__amount {
    font-family: $golos-regular;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #7C7C7C;

    @include lt-lg {
      line-height: 18px;
    }
  }

  &__icon {
    width: 14px;
    height: 14px;
  }
}
</style>
