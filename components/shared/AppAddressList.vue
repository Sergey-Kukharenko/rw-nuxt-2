<template>
  <div class="list">
    <div v-for="(item, idx) in list" :key="item" class="list__item">
      <div class="item">
        <label class="item__label label" :for="idx">
          <input
            :id="idx"
            type="radio"
            :value="item"
            :checked="item === selected"
            @change="onChange(item)"
          />
          <div class="label__button" :class="{ active: item === selected }">
            <svg-icon  name="check" class="icon" width="8" height="6"/>
          </div>

          <div class="label__text">
            {{ item }}
          </div>
        </label>

        <div class="item__edit">
          <svg-icon name="pencil" width="16" height="16"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAddressList',

  props: {
    selected: {
      type: String,
      required: true
    },

    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    onChange(item) {
      this.$emit('update:selected', item);
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  background: #ffffff;
  padding: 0 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
  border-radius: 10px;

  &__item {
    padding: 18px 0;
  }

  &__item:not(:last-child) {
    border-bottom: 1px solid #dde0e6;
  }
}

input {
  display: none;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__button {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: 1px solid #dde0e6;
    border-radius: 6px;
    box-sizing: border-box;

    & .icon {
      opacity: 0;
    }

    &.active {
      background: $color-dark-green;
      border-color: $color-dark-green;

      & .icon {
        opacity: 1;
      }
    }
  }

  &__text {
    flex: 1;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    padding: 0 14px;
  }
}
</style>
