<template>
  <div class="order">
    <div class="order__title">Order details</div>
    <div class="order__row" style="margin-top: 16px;">
      <div class="order__text-grey">2 bouquets</div>

      <div class="order__text-price">{{ cart.price }}</div>
    </div>
    <div class="order__row" style="margin-top: 6px; display: none;">
      <div class="order__text-grey">Sale</div>
      <div class="order__text-sale">- £ 8</div>
    </div>
    <div class="order__delim" style="margin-top: 16px;"></div>
    <div class="order__row" style="margin-top: 18px;">
      <div class="order__text-medium">Summary</div>
      <div class="order__text-summary">{{ cart.price }}</div>
    </div>
    <div class="order__cashback-desktop">
      <svg-icon
        class="order__icon-coins"
        name="coins"
      />
      <div>£0.4 Cashback from this order</div>
    </div>
    <div class="order__row order__cashback-mobile" style="margin-top: 5px;">
      <div class="order__text-grey">Cashback</div>
      <div class="order__text-cashback">
        <svg-icon
          class="order__icon-coins-2"
          name="coins"
        />
        <div>£0.4</div>
      </div>
    </div>
    <div class="order__promocode">
      <svg-icon
        class="order__icon-percent-green"
        name="percent-green"
      />
      <div>Promocode and Bonuses will be available at the next stage of order</div>
    </div>
    <div class="order__title" style="margin-top: 32px;">Your details</div>
    <form class="form" @submit.prevent="onSubmit">

      <basket-input
        v-model="name"
        style="margin-top: 16px;"
        size="large"
        placeholder="Your name"
        :validations="$v.name"
      />

      <basket-input
        v-model="phone"
        type="number"
        style="margin-top: 8px;"
        size="large"
        placeholder="Mobile phone"
        :validations="$v.phone"
      />

      <basket-button
        style="margin-top: 24px;"
        :stretch="true"
      >
        Continue
      </basket-button>
      <div class="order__terms">By clicking on the button, you agree to the<br><a href="#" target="_blank">Terms of
        personal data
        processing</a></div>
    </form>

  </div>
</template>

<script>
import {minLength, required} from 'vuelidate/lib/validators';

export default {
  name: 'BasketOrder',

  data() {
    return {
      name: '',
      phone: '',
    };
  },

  computed: {
    cart() {
      return this.$store.getters['cart/cart'];
    },
  },

  methods: {
    onSubmit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        // Submit Form
      }
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },

    phone: {
      required,
      minLength: minLength(4)
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  box-sizing: border-box;
  width: 344px;
  height: fit-content;
  padding: 24px;
  flex-shrink: 0;
  border: 1px solid #DDE0E6;
  border-radius: 12px;

  @include lt-lg {
    border: none;
    width: 100%;
    padding: 0;
  }

  &__title {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;

    @include lt-lg {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }

  &__delim {
    width: 100%;
    border-top: 1px solid #DDE0E6;
  }

  &__text-grey {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7C7C7C;
  }

  &__text-medium {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1F2226;
  }

  &__text-price {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #010810;
  }

  &__text-sale {
    font-family: $golos-medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #009959;
  }

  &__text-summary {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  &__cashback-desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    background: #FFF6E1;
    border-radius: 16px;
    padding: 18px 16px;
    margin-top: 24px;

    font-family: $golos-medium;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #1F2226;

    @include lt-lg {
      display: none;
    }
  }

  &__cashback-mobile {
    display: none;

    @include lt-lg {
      display: flex;
    }
  }

  &__text-cashback {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'ss08' on;
    color: #F8B900;
  }

  &__promocode {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    margin-top: 12px;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #7C7C7C;

    @include lt-lg {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__terms {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #7C7C7C;
    margin-top: 16px;

    & > a {
      color: #009959;
      text-decoration: none;
    }
  }

  &__icon-coins {
    width: 18px;
    height: 16px;
  }

  &__icon-coins-2 {
    width: 14px;
    height: 13px;
  }

  &__icon-percent-green {
    width: 16px;
    height: 16px;
  }
}
</style>
