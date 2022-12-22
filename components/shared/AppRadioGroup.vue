<template>
  <div class="radio-group">
    <label v-for="option in options" :key="option" :for="option" class="radio-group__label">
      <input :id="option" type="radio" :value="option" :checked="option === selected" @change="onChange(option)" />
      <span class="radio-group__button" :class="{ active: option === selected }" />
      <span class="radio-group__text">{{ option }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppRadioGroup',

  props: {
    selected: {
      type: String,
      required: true
    },

    options: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    onChange(item) {
      this.$emit('update:selected', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.radio-group {
  margin: -5px 0;

  input {
    display: none;
  }

  &__label {
    display: flex;
    align-items: center;
    padding: 5px 0;
    cursor: pointer;
  }

  &__button {
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 10px;

    &:before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 50%;
      box-sizing: border-box;
    }

    &:before {
      border: 1px solid #dde0e6;
    }

    &:after {
      width: 10px;
      height: 10px;
      background: #fff;
    }

    &.active {
      &:before {
        background: $color-green;
        border-width: 0;
      }
    }
  }

  &__text {
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #010810;
  }
}
</style>
