<template>
  <div class="layout layout--horizontal-dt">
    <div class="footer-container container">
      <div class="group">
        <div class="group__logo">FLOR</div>
        <div class="group__text">
          We work 24 hours and 7 days a week. Even without break!
        </div>
      </div>

      <div class="group-lists">
        <div
          v-for="(section, idx) in footer.sections"
          :key="idx"
          class="group-lists__item"
        >
          <app-footer-section :section="section" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataFooter from '@/data/footer'
import AppFooterSection from '@/components/footer/AppFooterSection';

export default {
  name: 'AppFooterContainer',
  components: {AppFooterSection},
  data() {
    return {
      footer: dataFooter
    }
  }
};
</script>

<style scoped lang="scss">
.footer-container {
  @include gt-sm {
    display: flex;
    justify-content: space-between;
    padding: 48px 0 42px;
  }

  @include sm {
    padding: 24px 0 22px;
  }
}

.group {
  @include sm {
    max-width: 260px;
    margin: 0 auto;
  }

  @include xs {
    max-width: 212px;
    text-align: center;
    padding: 30px 0;
    margin: 0 auto;
  }

  &__logo {
    font-family: $lora;
    line-height: 0.733333333;
    font-weight: 400;

    @include gt-xs {
      font-size: 75px;
      font-weight: 400;
      letter-spacing: 22px;
    }

    @include xs {
      font-size: 37px;
      letter-spacing: 11px;
    }
  }

  &__text {
    font-family: $golos-regular;
    font-weight: 400;

    @include gt-xs {
      max-width: 214px;
      font-size: 15px;
      line-height: 24px;
      margin-top: 28px;
    }

    @include xs {
      margin-top: 22px;
      font-size: 12px;
      line-height: 16px;
    }
  }
}

.group-lists {
  display: flex;
  justify-content: space-between;

  @include gt-sm {
    flex-basis: 482px;
  }

  @include sm {
    max-width: 482px;
    margin: 16px auto 0;
  }

  @include xs {
    display: block;
  }
}
</style>
