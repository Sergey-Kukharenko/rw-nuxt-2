<template>
    <div class="stars">
    <svg-icon
      v-for="(star, idx) in stars"
      :key="idx"
      name="star"
      class="stars__icon"
    />
  </div>
</template>

<script>
export default {
  name: 'AppStars',

  props: {
    stars: {
      type: Number,
      default: 1
    }
  },
};
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  gap: 5.96px;

  &__icon {
    width: 38.04px;
    height: 36.18px
  }
}
</style>