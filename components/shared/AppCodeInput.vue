<template>
  <div class="code">
    <div class="code__row">
      <div v-for="number in $options.CODE_INPUT_DEFAULT_COUNT" :key="number" class="code__item">
        <input
          :ref="`inputNumber${number}`"
          type="text"
          class="code__item-input"
          :class="{ error }"
          :maxlength="getMaxLength(number)"
          :autocomplete="getAutoCompleteRule(number)"
          :disabled="disabled"
          @click="resetInputHandler"
          @keypress="isNumberKey"
          @keyup="onInputKeyUp($event, number)"
        />
      </div>
    </div>
    <div v-if="error" class="code__error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { CODE_INPUT_DEFAULT_COUNT } from '~/constants/index';
import { isNumberKey } from '~/helpers/validators';

export default {
  name: 'AppCodeInput',

  props: {
    error: {
      type: String,
      default: ''
    },

    disabled: {
      type: Boolean,
      default: false
    }
  },

  CODE_INPUT_DEFAULT_COUNT,

  watch: {
    disabled(val) {
      if (val) {
        return;
      }

      this.autoFocus();
    }
  },

  methods: {
    isNumberKey,

    getMaxLength(number) {
      return number === 1 ? 6 : 1;
    },

    getAutoCompleteRule(number) {
      return number === 1 ? 'one-time-code' : 'no';
    },

    getRefValue(number) {
      return this.$refs['inputNumber' + number][0].value;
    },

    setRefValue(number, payload) {
      this.$refs['inputNumber' + number][0].value = payload;
    },

    focusInputByRef(number) {
      this.$refs['inputNumber' + number][0].focus();
    },

    autoFocus() {
      this.$nextTick(() => {
        this.focusInputByRef(1);
      });
    },

    resetInputHandler() {
      if (this.error) {
        Object.keys(this.$refs).forEach((_, idx) => {
          this.setRefValue(idx + 1, null);
        });

        this.focusInputByRef(1);
        this.$emit('reset-code-input');
      }
    },

    pasteCode() {
      const value = this.getRefValue(1);
      const splittedValue = value.split('');

      if (splittedValue) {
        splittedValue.forEach((v, idx) => {
          this.setRefValue(idx + 1, v);
        });
      }

      this.emitValues();
    },

    onInputKeyUp(e, number) {
      e?.preventDefault();

      if (this.getRefValue(1).toString().length > 1) {
        this.pasteCode();

        return;
      }

      if (['Backspace', 'Delete'].includes(e?.key)) {
        const currValue = this.getRefValue(number);

        if (currValue) {
          this.setRefValue(number, '');
        } else if (number > 1) {
          this.focusInputByRef(number - 1);
          this.resetInputHandler();
        }

        this.emitValues();

        return;
      }

      const newValue = parseInt(e.key);

      if (~newValue && !isNaN(newValue)) {
        this.setRefValue(number, newValue);

        if (number < CODE_INPUT_DEFAULT_COUNT) {
          this.focusInputByRef(number + 1);
        }

        this.emitValues();
      }
    },

    emitValues() {
      const code = Object.keys(this.$refs)
        .filter((item) => ~item.indexOf('inputNumber'))
        .map((key) => {
          return this.$refs[key][0].value;
        })
        .join('');

      if (code.length === CODE_INPUT_DEFAULT_COUNT) {
        this.$emit('set-code', code);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.code {
  &__row {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  &__item {
    &-input {
      background: #f7f7f7;
      border-radius: 10px;
      border: 1px solid transparent;
      outline: none;
      box-sizing: border-box;

      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      text-align: center;
      color: #010810;

      @include gt-sm {
        width: 72px;
        height: 72px;

        font-size: 32px;
        line-height: 40px;
      }

      @include lt-md {
        margin: 0;
        width: 48px;
        height: 48px;

        font-size: 20px;
        line-height: 24px;
      }

      &.error {
        border: 1px solid #db1838;
        padding-left: 0;
      }
    }
  }

  &__error {
    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    color: #db1838;

    @include gt-sm {
      margin-top: 16px;
      font-size: 14px;
      line-height: 20px;
    }

    @include lt-md {
      margin-top: 8px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
    }
  }
}
</style>
