<template>
  <div v-click-outside="hide" class="address">
    <input
      type="text"
      name="address"
      placeholder="Choose delivery address"
      class="input"
      @focus="show"
    />
    <app-address-list
      v-show="isVisible"
      :selected.sync="address"
      :list="addresses"
    />
    {{ address }}
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import AppAddressList from '@/components/shared/AppAddressList';

export default {
  name: 'AppAddress',
  components: {AppAddressList},
  directives: {
    clickOutside: vClickOutside.directive
  },

  props: {
    addresses: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      address: '',
      visibility: false
    }
  },

  computed: {
    isVisible() {
      return this.addresses.length > 0 && this.visibility
    }
  },

  methods: {
    hide() {
      this.visibility = false
    },

    show() {
      this.visibility = true
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
