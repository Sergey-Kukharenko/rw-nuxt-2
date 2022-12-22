<template>
  <div class="app-textarea">
    <textarea :value="value" :placeholder="placeholder" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    value: {
      type: [String, Number],
      required: true,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-textarea {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  flex: 1 0 auto;

  box-sizing: border-box;
  background: $bg-grey;
  color: $color-dark-grey;
  border-radius: 10px;
  width: 100%;
  height: 132px;
  padding: 12px;

  font-family: $golos-regular;
  font-style: normal;
  font-size: 14px;
  line-height: 20px;

  textarea {
    border: none;
    outline: none;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    width: 100%;
    height: 100%;
    resize: none;

    &::placeholder {
      font-family: $golos-regular;
      font-style: normal;
      font-size: 14px;
      line-height: 20px;
      color: $color-white-grey;
    }
  }
}
</style>
