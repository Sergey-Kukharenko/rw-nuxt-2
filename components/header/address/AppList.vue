<template>
  <div class="list-wrapper">
    <div class="list">
      <div
        v-for="(item, idx) in list"
        :key="idx"
        class="list__item"
        @click="onChange(item)"
      >
        <div class="title">{{ item.address }}</div>
        <div class="subtitle">{{ item.city }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppList',

  inject: ['updateLocation'],

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    onChange({ address, city }) {
      this.$emit('clearQuery')
      this.updateLocation({ address, city })
    }
  }
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  position: relative;

  @include gt-sm {
    &:after {
      content: ' ';
      height: 32px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
          180deg,
          transparent,
          hsl(0deg 0% 100% / 85%) 50%
      );
      z-index: 1;
    }
  }

  @include lt-md {

  }
}

.list {
  margin: 24px 0 0;

  @include gt-sm {
    height: 233px;
    overflow-y: auto;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    margin: 10px 0;
    cursor: pointer;
    background: #fff;
    border-radius: 10px;
    transition: background-color 0.2s ease 0s;

    &:hover {
      background: $bg-grey;

      & .title,
      & .subtitle {
        transform: translateX(16px);
      }
    }
  }

  &__item {
    &:first-child {
      margin-top: 0;
    }
  }

  &__item {
    &:last-child {
      margin-bottom: 24px;
    }
  }
}

.title,
.subtitle {
  font-family: $golos-regular;
  font-size: 16px;
  line-height: 22px;
  transform: translateX(0);
  transition: transform 0.2s ease 0.025s;

  &--grey {
    color: $color-white-grey;
  }
}

.subtitle {
  font-size: 14px;
  color: $color-white-grey;
  transition: transform 0.2s ease 0.05s;
}
</style>
