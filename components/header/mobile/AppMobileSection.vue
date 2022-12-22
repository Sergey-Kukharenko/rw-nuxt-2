<template>
  <div :class="classNames">
    <div class="section__header header" @click="isVisible = !isVisible">
      <div class="header__title">
        {{ section.title }}
      </div>
      <svg-icon name="arrow-down" class="header__icon" />
    </div>
    <div class="section__list list">
      <a v-for="(item, idx) in section.list" :key="idx" class="list__item">
        {{ item.text }}
        <span v-if="item.from" class="text-grey">{{ item.from }}</span>
      </a>
    </div>
    <a v-if="isLink" class="section__link">{{ section.link.text }}</a>
  </div>
</template>

<script>
import { useToggleClassName } from '~/helpers';

export default {
  name: 'AppMobileSection',

  props: {
    section: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      isVisible: true
    };
  },

  computed: {
    classNames() {
      return useToggleClassName(this.isVisible, 'section', 'active');
    },

    isLink() {
      return this.section?.link?.text;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin: 17px 0;
  padding: 0 0 18px;

  &__link {
    display: none;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: $color-dark-green;
    margin: 12px 0 -2px;
  }

  &--active {
    & .header__icon {
      transform: rotate(180deg);
    }

    & .list,
    & .section__link {
      display: block;
    }
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    font-family: $golos-bold;
    font-size: 14px;
    line-height: 16px;
  }

  &__icon {
    display: block;
    width: 12px;
    height: 16px;
    transition: transform 0.2s ease 0s;
  }
}

.list {
  display: none;
  margin: 5px 0 -6px;

  &__item {
    display: block;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
    color: $color-dark-grey;
    padding: 6px 0;
  }
}

.text-grey {
  color: $color-white-grey;
}
</style>
