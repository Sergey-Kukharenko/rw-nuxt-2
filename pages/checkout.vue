<template>
  <main class="checkout">
    <div class="checkout__recipient">
      <checkout-recipient/>
    </div>
    <div class="checkout__delivery-details">
      <checkout-delivery-details/>
    </div>
    <div class="checkout__date-time">
      <checkout-date-time/>
    </div>
    <div class="checkout__payment-methods">
      <checkout-payment-methods/>
    </div>
    <div class="checkout__gift-card">
      <checkout-gift-card/>
    </div>
    <div class="checkout__order">
      <checkout-order/>
    </div>
    <div class="checkout__email">
      <checkout-email/>
    </div>
    <div class="checkout__submit">
      <basket-button
        size="large"
        :stretch="true"
      >
        <div class="checkout__submit-template">
          <div>Place an order</div>
          <div class="checkout__submit-price">£ 86 <span>• Free delivery</span></div>
        </div>
      </basket-button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CheckoutPage',
  layout: 'checkout',
  head: {
    meta: [{
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }]
  }
};
</script>

<style lang="scss" scoped>
.checkout {
  display: grid;
  grid-template-columns: 1fr 344px;
  grid-template-rows: auto;
  column-gap: 24px;
  max-width: 1080px;
  margin: 0 auto;

  @include lt-lg {
    display: block;
    padding: 0 16px;
  }

  &__recipient {
    grid-area: 1 / 1 / 2 / 2;
  }

  &__delivery-details {
    grid-area: 2 / 1 / 3 / 2;
  }

  &__date-time {
    grid-area: 3 / 1 / 4 / 2;
  }

  &__payment-methods {
    grid-area: 4 / 1 / 5 / 2;
  }

  &__gift-card {
    grid-area: 5 / 1 / 6 / 2;
  }

  &__order {
    grid-area: 1 / 2 / 7 / 3;
  }

  &__email {
    grid-area: 6 / 1 / 7 / 2;
  }

  &__submit {
    margin-bottom: 30px;
  }

  &__submit-template {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__submit-price {
    font-family: $golos-bold;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

    span {
      color: #FFFFFF77;
    }

    @include lt-lg {
      font-size: 14px;
    }
  }
}
</style>
