<template>
  <textarea-autosize
    v-model="passedValue"
    :placeholder="placeholder"
    :rows="1"
    :min-height="48"
    class="textarea"
  />
</template>

<script>
export default {
  name: 'AppTextArea',

  props: {
    placeholder: {
      type: String,
      default: 'Placeholder'
    },

    value: {
      type: String,
      required: true
    }
  },

  computed: {
    passedValue: {
      get() {
        return this.value
      },

      set(newVal) {
        this.$emit('update:value', newVal)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  padding: 14px 16px !important;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }
}
</style>
