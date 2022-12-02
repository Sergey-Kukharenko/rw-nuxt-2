<template>
  <div ref="select" class="app-select" :class="classes">
    <div class="app-select__field" @click="onClickField">
      <div v-if="!label" class="app-select__label">
        <slot name="label">
          {{ placeholder }}
        </slot>
      </div>
      <div v-else class="app-select__label" :class="{ dark: darkLabel }">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
      <div class="app-select__choose">Choose</div>
      <div class="app-select__chevron">
        <svg-icon class="app-select__icon" name="chevron-right" />
      </div>
    </div>
    <client-only>
      <teleport to="body">
        <div v-show="isOpened" ref="dropdown" v-click-outside="close" class="app-select__dropdown">
          <div class="app-select__dropdown-scroll">
            <div class="app-select__dropdown-title">
              <div>{{ placeholder }}</div>
              <div class="app-select__dropdown-close" @click="close">
                <img src="~/assets/sprite/svg/close.svg" width="10" height="10" alt="close" />
              </div>
            </div>
            <div v-for="(item, index) in list" :key="index" class="app-select__dropdown-item">
              <slot :item="item" :index="index" :open="open" :close="close" :set-label="setLabel" />
            </div>
          </div>
        </div>
      </teleport>
    </client-only>
  </div>
</template>

<script>
import Teleport from 'vue2-teleport';
import vClickOutside from 'v-click-outside';

export default {
  name: 'AppSelect',
  components: { Teleport },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
      validate(value) {
        return ['small', 'medium', 'large', 'x-large'].includes(value);
      },
    },
    list: {
      type: Array,
      default: () => [],
    },
    darkLabel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpened: false,
      label: '',
    };
  },
  computed: {
    classes() {
      return {
        [`app-select--size-${this.size}`]: true,
      };
    },
  },
  watch: {
    isOpened(value) {
      if (value && window.innerWidth <= 1280) {
        document.body.classList.add('noscroll');
      } else {
        document.body.classList.remove('noscroll');
      }
    },
  },
  methods: {
    open() {
      this.onClickField();
    },
    close(event) {
      if (
        !event ||
        !['app-select__field', 'app-select__label', 'app-select__choose'].includes(event.target.classList[0])
      ) {
        this.isOpened = false;
      }
    },
    setLabel(value) {
      this.label = value;
    },
    onClickField() {
      if (window.innerWidth > 1280) {
        const rect = this.$refs.select.getBoundingClientRect();
        this.$refs.dropdown.style.left = `${rect.x}px`;
        this.$refs.dropdown.style.top = `${rect.y + window.scrollY + rect.height + 8}px`;
        this.$refs.dropdown.style.width = `${rect.width}px`;
      }
      this.isOpened = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-select {
  box-sizing: border-box;

  &__field {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    background: #f7f7f7;
    color: #7c7c7c;
    border-radius: 10px;
    width: 100%;
    cursor: default;
    user-select: none;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
  }

  &__label.dark {
    color: $color-dark-grey;
  }

  &__choose {
    display: flex;
    flex-direction: row;
    align-items: center;

    box-sizing: border-box;
    height: 36px;
    padding: 0 12px;
    color: $color-dark-green;
    background-color: #ffffff;
    border-radius: 8px;
    font-family: $golos-medium;
    font-weight: 500;
    cursor: default;
    user-select: none;

    @include lt-lg {
      display: none;
    }
  }

  &__chevron {
    display: none;

    @include lt-lg {
      display: block;
      margin-right: 10px;
      user-select: none;
      cursor: default;
      width: 16px;
      height: 16px;
    }
  }

  &__dropdown {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    height: fit-content;
    max-height: 228px;

    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    padding: 8px 6px 8px 16px;

    @include lt-lg {
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      height: 100%;
      max-height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: none;
      border-radius: 0;
    }
  }

  &__dropdown-title {
    display: none;

    @include lt-lg {
      position: sticky;
      top: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      font-family: $golos-medium;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      background-color: #ffffff;
      padding: 20px 0 6px 0;
      //backdrop-filter: blur(4px);
    }
  }

  &__dropdown-close {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;
  }

  &__dropdown-scroll {
    width: 100%;
    height: 100%;
    overflow: auto;
    max-height: 212px;
    padding-right: 24px;
    box-sizing: border-box;

    @include lt-lg {
      position: fixed;
      left: 0;
      bottom: 0;
      height: fit-content;
      max-height: 90%;
      padding: 0 12px 8px 16px;
      background-color: #ffffff;
      border-radius: 16px 16px 0 0;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #9296a0;
      border-radius: 2px;
      border: none;

      @include lt-lg {
        background-color: #eaeaea;
      }
    }
  }

  &__dropdown-item {
    &:not(:last-child) {
      border-bottom: 1px solid #dde0e6;
    }
  }

  &--size-small {
    .app-select__field {
      height: 24px;
      padding: 0 10px;
      border-radius: 8px;
    }
  }

  &--size-medium {
    .app-select__field {
      height: 36px;
      padding: 0 4px 0 12px;
    }
  }

  &--size-large {
    .app-select__field {
      height: 48px;
      padding: 0 6px 0 16px;
    }
  }

  &--size-x-large {
    .app-select__field {
      height: 52px;
      padding: 0 6px 0 16px;
    }
  }

  &--size-x-large {
    .app-select__field {
      height: 52px;
      padding: 0 6px 0 16px;
    }
  }

  &__icon {
    width: 16px;
    height: 16px;
  }
}
</style>
