<template>
  <div class="store-button" :class="isDark">
    <svg-icon :name="storeIcon" class="store-button__icon" />
  </div>
</template>

<script>
export default {
  name: 'AppStoreButton',

  props: {
    storeType: {
      type: String,
      required: true,
      validate(val) {
        ['appstore', 'googleplay'].includes(val);
      }
    },

    isDark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    storeIcon() {
      return this.isDark ? this.storeType + '-dark' : this.storeType;
    }
  }
};
</script>

<style lang="scss" scoped>
.store-button__icon {
  @include gt-sm {
    width: 110px;
    height: 32px;
    cursor: pointer;
    user-select: none;
  }
}
</style>
