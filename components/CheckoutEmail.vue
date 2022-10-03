<template>
  <checkout-pane title="Enter your Email">
    <div class="email">
      <div class="email__field-column">
        <app-input
          value=""
          placeholder="Email for receiving bonuses"
          size="x-large"
        />
        <div class="email__radio">
          <app-radio value="">I would like to receive exclusive deals, information on the latest products and relevant offers</app-radio>
        </div>
      </div>
      <div class="email__field-column">
        <div class="email__field-row">
          <svg-icon
            class="email__icon-newsfeed"
            name="newsfeed-green"
          />
          <div>We’ll send receipt to your Email</div>
        </div>
        <div class="email__field-row">
          <svg-icon
            class="email__icon-place"
            name="place-green"
          />
          <div>You’ll be able to track the order status</div>
        </div>
      </div>
    </div>
  </checkout-pane>
</template>

<script>
import AppInput from "~/components/shared/AppInput";
import AppRadio from "~/components/shared/AppRadio";
export default {
  name: "CheckoutEmail",
  components: {AppRadio, AppInput}
}
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  flex-direction: row;
  gap: 29px;
  width: 100%;
  margin-top: 28px;

  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.01em;
  color: #1F2226;

  @include lt-lg {
    flex-direction: column;
  }

  &__radio {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    flex: 1 0 auto;
    margin-top: 12px;

    .app-radio {
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #1F2226;
    }
  }

  &__field-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 50%;

    @include lt-lg {
      width: 100%;
    }
  }

  &__field-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  &__icon-newsfeed,
  &__icon-place {
    width: 20px;
    height: 20px;
  }
}
</style>
