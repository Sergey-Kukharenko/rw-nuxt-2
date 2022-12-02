<template>
    <div class="delivery">
      <app-info-banner
        :background-color="$options.PROMO.backgroundColor"
        :background-image="$options.PROMO.backgroundImage"
        :title="$options.PROMO.title"
        :text="$options.PROMO.text"
        :page="$route.name"
      />
      <app-info-text-section :content="$options.TEXT_INFO" />
      <app-info-hero :items="$options.HERO_ITEMS" />
      <delivery-payment />
      <div class="split-line layout" />
      <delivery-something />
      <div class="split-line layout" />
      <delivery-ad />
    </div>
  </template>
  
  <script>
  import AppInfoBanner from '~/components/info/AppInfoBanner';
  import AppInfoTextSection from '~/components/info/AppInfoTextSection';
  import AppInfoHero from '~/components/info/AppInfoHero';
  
  import { PROMO, TEXT_INFO, HERO_ITEMS } from '~/data/delivery';
  
  export default {
    name: 'DeliveryPage',
  
    components: {
      AppInfoBanner,
      AppInfoTextSection,
      AppInfoHero,
    },
  
    PROMO,
    TEXT_INFO,
    HERO_ITEMS,
  };
  </script>
  
  <style lang="scss" scoped>
  .delivery {
    display: flex;
    flex-direction: column;
  
    @include gt-sm {
      gap: 56px;
      padding-bottom: 56px;
    }
  
    @include lt-md {
      gap: 20px;
      padding-bottom: 20px;
    }
  
    .split-line {
      height: 1px;
      max-width: 1080px;
      width: 100%;
      padding: 0;
      background: #cccccc;

      @include lt-md {
        width: calc(100% - 40px);
      }
    }
  }
  </style>
  