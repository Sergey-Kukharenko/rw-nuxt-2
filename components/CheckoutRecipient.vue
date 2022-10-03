<template>
  <checkout-pane
    title="Recipient"
    :delim="true"
  >
    <div class="recipient__select">
      <div class="recipient__radio-row">
        <app-radio
          v-model="recipient"
          name="myself"
        >
          I’ll get order by myself
        </app-radio>
      </div>
      <div class="recipient__radio-row">
        <app-radio
          v-model="recipient"
          name="another"
        >
          Another recipient
        </app-radio>
      </div>
    </div>
    <div
      v-if="recipient === 'another'"
      class="recipient__another-name"
    >
      <app-input
        placeholder="Recipient name"
        value=""
        size="x-large"

      />
      <app-input
        placeholder="And phone number"
        value=""
        size="x-large"
      />
    </div>
  </checkout-pane>
</template>

<script>
import AppRadio from "~/components/shared/AppRadio";
import AppInput from "~/components/shared/AppInput";
export default {
  name: "CheckoutRecipient",
  components: {AppRadio, AppInput},
  data () {
    return {
      recipient: "myself"
    };
  }
}
</script>

<style lang="scss" scoped>
.recipient {
  &__select {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }

  &__radio-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  &__another-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    margin-top: 16px;

    @include lt-lg {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      margin-top: 12px;
    }
  }
}
</style>
