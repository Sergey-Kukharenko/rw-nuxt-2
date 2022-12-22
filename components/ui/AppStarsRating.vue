<template>
  <input v-model="passedCount" type="number" class="counter__input" />
</template>

<script>
export default {
  name: 'AppStarsRating',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },

  computed: {
    passedCount: {
      get() {
        return this.count;
      },

      set(newVal) {
        this.$emit('update:count', +newVal);
      }
    }
  }
};
</script>

<style scoped></style>
