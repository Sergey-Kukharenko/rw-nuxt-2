<template>
  <div class="menu">
    <div
      v-for="item in list"
      :key="item.title"
      class="menu__item"
      :class="{ 'has-sub-level': item.hasSubLevel }"
    >
      <div class="content">
        <div class="content__figure">
          <svg-icon
            :name="item.icon"
            v-bind="item.style"
            class="content__icon"
          />
        </div>
        <div class="content__text">
          {{ item.title }}
        </div>
      </div>

      <app-menu-dropdown v-if="item.hasSubLevel">
        <app-menu-sections v-slot="slotProps" :section="item.by">
          <app-menu-section
            :theme="setColumnSize(item.title)"
            :section="{ ...slotProps }"
          />
        </app-menu-sections>
      </app-menu-dropdown>
    </div>
  </div>
</template>

<script>
import AppMenuDropdown from '~/components/header/menu/AppMenuDropdown';
import AppMenuSections from '~/components/header/menu/AppMenuSections';
import AppMenuSection from '~/components/header/menu/AppMenuSection';

export default {
  name: 'AppMenuNavigation',

  components: {AppMenuSection, AppMenuSections, AppMenuDropdown},

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    setColumnSize(value) {
      switch (value) {
        case 'Flowers':
          return 'md';
        case 'Roses':
          return 'lg';
        default:
          return '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -18px;

  &__item {
    cursor: default;
    background: #ffffff;
    padding: 0;
    border-radius: 12px 12px 0 0;

    &.has-sub-level {
      &:hover {
        box-shadow: 0 4px 16px #0000001f;
        z-index: 3;

        & .dropdown {
          display: block;
        }
      }
    }

    &:first-child {
      &:not(:hover) {
        color: $color-dark-green;
      }

      &:hover {
        color: lighten($color-dark-green, 5%);
      }
    }

    &:last-of-type {
      &:not(:hover) {
        color: $color-link-pink;
      }

      &:hover {
        color: lighten($color-link-pink, 5%);
      }
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: #ffffff;
  padding: 8px 16px 13px;
  border-radius: 12px 12px 0 0;
  z-index: 2;
  cursor: pointer;

  &__icon {
    display: block;
    color: inherit;
    fill: currentColor;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  &__text {
    font-family: $golos-medium;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
