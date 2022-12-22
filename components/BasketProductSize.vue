<template>
  <div v-if="value.length" class="size">Bouquet size: {{ value }}</div>
</template>

<script>
export default {
  name: 'BasketProductSize',
  props: {
    value: {
      type: String,
      default: '',
      validate(value) {
        return ['', 'Premium'].includes(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.size {
  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #7c7c7c;

  @include lt-lg {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.02em;
  }
}
</style>
