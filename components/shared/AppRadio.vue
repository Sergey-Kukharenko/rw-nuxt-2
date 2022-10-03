<template>
  <div
    class="app-radio"
    @click="$emit('change', name)"
  >
    <svg-icon
      class="app-radio__icon"
      :name="value === name ? 'radio-on': 'radio-off'"
    />
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AppRadio",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: [String, Number],
      require: true,
      default: ""
    },
    name: {
      type: [String, Number],
      require: true,
      default: ""
    }
  }
}
</script>


<style lang="scss" scoped>
.app-radio {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: default;
  user-select: none;
  flex-shrink: 0;

  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #010810;

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>
