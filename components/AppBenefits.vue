<template>
  <section class="benefits">
    <div class="layout">
      <div class="benefits__title">Our benefits</div>
      <div class="benefits__tabs">
        <app-benefits-tabs :tabs="benefitsTabs" :active-tab="activeTab" @set-active-tab="setActiveTab" />
      </div>
      <div class="benefits__container">
        <app-benefits-card
          v-if="$device.isDesktop"
          :active-tab="activeTab"
          :tabs="$options.DATA_BENEFITS"
          @prev="prevTab"
          @next="nextTab"
        />
        <app-benefits-slider v-if="$device.isMobileOrTablet" :slides="$options.DATA_BENEFITS" />
      </div>
    </div>
  </section>
</template>

<script>
import dataBenefits from '~/data/benefits';

export default {
  name: 'AppBenefits',

  data() {
    return {
      activeTab: 0,
    };
  },

  DATA_BENEFITS: dataBenefits,

  computed: {
    benefitsTabs() {
      return dataBenefits.map((tab) => tab.title);
    },
  },

  methods: {
    setActiveTab(idx) {
      this.activeTab = idx;
    },

    prevTab() {
      this.activeTab--;
    },

    nextTab() {
      this.activeTab++;
    },
  },
};
</script>

<style lang="scss" scoped>
.benefits {
  @include gt-sm {
    padding: 32px 0;
    border-radius: 40px;
    background: #fafafa;
    margin-top: 24px;
  }

  @include lt-md {
    margin: 24px 0;
  }

  .layout {
    padding-top: 0;
    padding-bottom: 0;
  }

  &__title {
    line-height: 24px;
    font-size: 20px;
    font-style: normal;
    margin-bottom: 24px;

    @include gt-sm {
      font-family: $Literata;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: #000000;
    }

    @include lt-md {
      font-family: $golos-regular;
      font-weight: 600;
      letter-spacing: 0.03px;
      color: #2f2b20;
    }
  }

  &__tabs {
    @include gt-sm {
      margin-top: 14px;
      margin-bottom: 16px;
    }

    @include lt-md {
      display: none;
    }
  }
}
</style>
