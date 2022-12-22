<template>
  <div class="footer-main">
    <div class="layout layout--horizontal-dt">
      <div class="footer-container container">
        <div class="email-form">
          <app-best-offer rounded-top />
        </div>
        <div class="group">
          <div class="group__logo">
            <svg-icon name="logo" class="group__logo-icon" />
          </div>
          <div class="group__text">We work 24 hours and 7 days a week. Even without break!</div>
          <div class="group__email">
            <app-email-button />
          </div>
        </div>
        <div class="group-lists">
          <div v-for="(section, idx) in footer.sections" :key="idx" class="group-lists__item">
            <app-footer-section :section="section" />
          </div>
        </div>
        <div class="group-feedback">
          <div class="group-feedback__email-form">
            <app-best-offer />
          </div>
          <app-footer-feedback :contacts="footer.contacts" />
        </div>
        <div class="group--mobile">
          <div class="group--mobile__logo">
            <svg-icon name="logo" class="group--mobile__logo-icon" />
          </div>
          <div class="group--mobile__text">We work 24 hours and 7 days a week. Even without break!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AppFooterSection from '@/components/footer/AppFooterSection';
import AppFooterFeedback from '@/components/footer/AppFooterFeedback';
import AppEmailButton from '@/components/shared/AppEmailButton';

export default {
  name: 'AppFooterContainer',

  components: {
    AppFooterSection,
    AppFooterFeedback,
    AppEmailButton
  },

  computed: {
    ...mapGetters({ footer: 'layout/getFooter' })
  }
};
</script>

<style scoped lang="scss">
.footer-main {
  @include gt-sm {
    border-bottom: 1px solid #e5e5e5;
  }
}

.footer-container {
  @include gt-sm {
    display: flex;
    justify-content: space-between;
    padding: 48px 0 24px;
  }

  @include lt-md {
    padding: 0 0 22px;
  }
}

.email-form {
  @include gt-sm {
    display: none;
  }

  @include sm {
    max-width: 252px;
    margin: 0 auto;
  }
}

.group {
  position: relative;

  @include lt-md {
    display: none;
  }

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

  &--mobile {
    @include gt-sm {
      display: none;
    }
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 70%;
    margin: 0 auto;
    padding-top: 32px;

    &__logo {
      display: flex;
      justify-content: center;

      &-icon {
        width: 116.16px;
        height: 25.89px;
      }
    }

    &__text {
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.01em;
      color: $color-dark-grey;
    }
  }

  &__logo-icon {
    @include gt-xs {
      width: 133.96px;
      height: 29.97px;
    }
  }

  &__text {
    font-family: $golos-regular;
    font-weight: 400;

    @include gt-xs {
      max-width: 214px;
      font-size: 15px;
      line-height: 24px;
      margin-top: 9px;
    }

    @include lt-md {
      display: none;
    }
  }

  &__email {
    position: absolute;
    bottom: 0;

    @include lt-md {
      display: none;
    }
  }

  &-feedback {
    @include gt-sm {
      flex-basis: 252px;
    }

    @include sm {
      max-width: 252px;
      margin: 16px auto 0;
    }

    &__email-form {
      @include lt-md {
        display: none;
      }
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
