<template>
  <div class="delivery-ad layout">
    <app-advertising-card
      v-for="(card, index) in $options.ADVERTISING"
      :key="index"
      :bg-color="card.backgroundColor"
      :image="card.image"
      :title="card.title"
      :text="card.text"
    />
  </div>
</template>

<script>
import AppAdvertisingCard from '~/components/info/AppAdvertisingCard';

import {ADVERTISING} from '~/data/delivery'

export default {
  name: 'DeliveryAd',

  components: {
    AppAdvertisingCard
  },

  ADVERTISING
}
</script>

<style lang="scss" scoped>
.delivery-ad {
  display: flex;
  
  @include gt-sm {
    gap: 24px;
    width: 100%;
  }
  
  @include lt-md {
    width: calc(100% - 40px);
    flex-direction: column;
    gap: 16px;
  }
}
</style>