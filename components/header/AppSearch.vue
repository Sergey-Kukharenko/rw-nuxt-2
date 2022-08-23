<template>
  <div>
    <button class="button search" @click="isVisibility = true">
      <svg-icon name="search" class="button__icon" />
      <span class="button__text">Search in Florа</span>
    </button>

    <app-modal :visible="isVisibility" @close="isVisibility = false">
      <h1>Search</h1>
    </app-modal>
  </div>
</template>

<script>
import AppModal from '@/components/shared/AppModal.vue'

export default {
  name: 'AppSearch',
  components: {
    AppModal
  },
  data() {
    return {
      isVisibility: false
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  color: $color-dark-grey;

  @include gt-sm {
    padding: 10px 0;
  }

  @include lt-md {
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  &:hover {
    color: lighten($color-dark-grey, 20%);
  }

  &__icon {
    @include gt-sm {
      width: 18px;
      height: 18px;
      color: inherit;
      fill: currentColor;
    }

    @include lt-md {
      width: 20px;
      height: 20px;
      fill: $color-dark-grey;
    }
  }

  &__text {
    font-family: $golos-medium;
    font-size: 14px;
    margin-left: 4px;

    @include lt-md{
      display: none;
    }
  }
}
</style>
