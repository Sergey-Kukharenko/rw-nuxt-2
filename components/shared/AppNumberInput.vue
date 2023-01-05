<template>
  <div>
    <app-input
      :value="number"
      :mask="$refs['number-input']?.phoneNumberExample?.replace(/\d/g, '#')"
      size="x-large"
      :placeholder="$refs['number-input']?.phoneNumberExample"
      :error="error"
      @input="onInput"
    >
      <template #left>
        <vue-phone-number-input
          ref="number-input"
          class="number-input"
          default-country-code="GB"
          :preferred-countries="['GB']"
          @update="updateHandler"
        />
      </template>
    </app-input>
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import AppInput from '~/components/shared/AppInput';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
  name: 'AppNumberInput',

  components: {
    VuePhoneNumberInput,
    AppInput
  },

  props: {
    error: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      number: ' ',
      phoneMask: ''
    };
  },

  mounted() {
    this.initNumberInputStyles();
    this.onInput('');
  },

  methods: {
    onInput(value) {
      this.number = value;

      const input = document.querySelector('.number-input .input-tel__input');
      input.value = value;
      input.dispatchEvent(new Event('input'));
    },

    updateHandler({ isValid = false, formatInternational = '' }) {
      this.$emit('set-number', { value: formatInternational, isValid });
    },

    initNumberInputStyles() {
      const container = document.querySelector('.number-input > .select-country-container');
      const input = document.querySelector('.number-input .country-selector__input');
      const inputStyles = [
        {
          prop: 'padding',
          value: '0 0 0 30px'
        },
        {
          prop: 'width',
          value: '64px'
        },
        {
          prop: 'borderRadius',
          value: '10px'
        }
      ];

      inputStyles.forEach((s) => {
        if (s.prop === 'width') {
          container.style.width = s.value;
          container.style.maxWidth = 'auto';
          container.style.minWidth = 'unset';
        }

        input.style[s.prop] = s.value;
      });
    }
  }
};
</script>

<style lang="scss">
.number-input {
  .country-selector {
    &__toggle,
    &__label {
      display: none;
    }

    &__country-flag {
      top: 15px;
      left: 7px;
    }

    &__input {
      border: none;
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.01em;
      color: #1f2226;
      padding-top: 0px;
    }

    &.has-list-open .country-selector__input,
    &.has-value .country-selector__input {
      border-color: none;
      box-shadow: none !important;
    }
  }

  .flex-1 {
    display: none;
  }
}

.error {
  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #db1838;
  padding-left: 18px;
  margin-top: 4px;
}
</style>
