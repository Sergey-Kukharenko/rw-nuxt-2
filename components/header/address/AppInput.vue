<template>
  <input
    v-model="localQuery"
    autocomplete="off"
    type="text"
    name="name"
    placeholder="Start typing a post code, street or address"
    class="input"
  />
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    query: {
      type: String,
      default: ''
    }
  },

  computed: {
    localQuery: {
      get() {
        return this.query;
      },

      set(newValue) {
        this.$emit('update:query', newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  font-family: $golos-regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  background: $bg-grey;
  padding: 14px 16px;
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
