<template>
  <section v-if="isBenefits" class="benefits">
    <div class="layout">
      <div class="benefits__title">Our benefits</div>
      <div class="benefits__tabs">
        <app-benefits-tabs :tabs="benefitsTabs" :active-tab="activeTab" @set-active-tab="setActiveTab" />
      </div>
      <div class="benefits__container">
        <app-benefits-card
          v-if="$device.isDesktop"
          :active-tab="activeTab"
          :tabs="benefits"
          @prev="prevTab"
          @next="nextTab"
        />
        <app-benefits-slider v-if="$device.isMobileOrTablet" :slides="benefits" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppBenefits',

  data() {
    return {
      activeTab: 0
    };
  },

  computed: {
    ...mapGetters({ benefits: 'pages/home/getBenefits' }),

    isBenefits() {
      return this.benefits.length;
    },

    benefitsTabs() {
      return this.benefits.map((tab) => tab.title);
    }
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
    }
  }
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
    margin: 24px 0 -6px;
  }

  .layout {
    padding-top: 0;
    padding-bottom: 0;
  }

  &__title {
    font-family: $Literata;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: $color-dark-grey;
    margin-bottom: 24px;
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
