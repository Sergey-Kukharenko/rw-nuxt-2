<template>
  <div class="location">
    <app-location-button :location="location" @click="open"/>

    <app-modal :visible="isVisible" @close="close">
      <app-address />
    </app-modal>
  </div>
</template>

<script>
import AppModal from '~/components/shared/AppModal.vue'
import AppLocationButton from '~/components/header/location/AppLocationButton';
import {disableScroll, enableScroll} from '~/helpers/scrollLock';
import AppAddress from '~/components/header/address/AppAddress';

export default {
  name: 'AppLocation',

  components: {
    AppAddress,
    AppLocationButton,
    AppModal
  },

  provide() {
    return {
      updateLocation: this.updateLocation
    }
  },

  data() {
    return {
      isVisible: false,
      location: {
        city: '',
        address: ''
      }
    }
  },

  methods: {
    open() {
      this.isVisible = true
      disableScroll()
    },

    close() {
      this.isVisible = false
      enableScroll()
    },

    updateLocation(payload) {
      this.location = payload
      this.isVisible = false
      enableScroll()
    }
  }
}
</script>

<style lang="scss" scoped>
.location-button {
  @include gt-sm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 245px;
    background: #f7f7f7;
    padding: 7px 17px;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
  }

  @include lt-md {
    display: none;
  }

  &__icon {
    flex-shrink: 0;
  }

  &__description {
    flex: 1;
  }
}

.description {
  margin: 0 auto 0 14px;

  &__text {
    font-family: $golos-regular;
    font-size: 11px;
    line-height: 14px;
  }

  &__title {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
    color: $color-dark-grey;
    margin: 0 0;
  }
}

.icon {
  &__location {
    width: 13.24px;
    height: 13.24px;
    fill: $color-dark-green;
  }

  &__arrow {
    width: 13.38px;
    height: 13.38px;
    fill: $color-dark-grey;
  }
}
</style>
