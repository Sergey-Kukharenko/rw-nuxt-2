<template>
  <div>
    <button class="button search" @click="isVisible = true">
      <svg-icon name="search" class="button__icon" />
      <span class="button__text">Search in Florа</span>
    </button>

    <app-modal
      v-if="$device.isDesktop"
      :visible="isVisible"
      theme="full"
      @close="isVisible = false"
    >
      <app-search-box/>
    </app-modal>
  </div>
</template>

<script>
import AppModal from '~/components/shared/AppModal.vue'
import AppSearchBox from '~/components/header/search/AppSearchBox';

export default {
  name: 'AppSearch',

  components: {
    AppSearchBox,
    AppModal
  },

  data() {
    return {
      isVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  color: $color-dark-grey;
  padding: 10px 0;

  &:hover {
    color: lighten($color-dark-grey, 20%);
  }

  &__icon {
    width: 20px;
    height: 20px;
    color: inherit;
    fill: currentColor;
  }

  &__text {
    font-family: $golos-medium;
    font-size: 14px;
    margin-left: 3px;

    @include lt-md {
      display: none;
    }
  }
}
</style>
