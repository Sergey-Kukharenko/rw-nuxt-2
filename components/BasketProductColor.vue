<template>
  <div
    v-if="value.length"
    class="color"
  >
    Rose color: {{ value }}
  </div>
</template>

<script>
export default {
  name: "BasketProductColor",
  props: {
    value: {
      type: String,
      default: "",
      validate (value) {
        return ["", "Bright Mix"].includes(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.color {
  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #7C7C7C;

  @include lt-lg {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.02em;
  }
}
</style>
