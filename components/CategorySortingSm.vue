<template>
  <client-only>
    <teleport to="body">
      <div class="sorting-dropdown" @click="close">
        <div class="sorting-dropdown__scroll" @click.stop>
          <div class="sorting-dropdown__scroll-title">
            <div>Sort by</div>
            <div class="sorting-dropdown__scroll-close" @click="close">
              <img src="~/assets/sprite/svg/close.svg" width="10" height="10" alt="close" />
            </div>
          </div>
          <div v-for="(item, index) in list" :key="index" class="item">
            <app-radio :value="currSorting" :name="item" @change="setSort">
              {{ item }}
            </app-radio>
          </div>
        </div>
      </div>
    </teleport>
  </client-only>
</template>

<script>
import vClickOutside from 'v-click-outside';
import Teleport from 'vue2-teleport';
import AppRadio from '~/components/shared/AppRadio';

export default {
  name: 'CategorySortingSm',

  components: { Teleport, AppRadio },

  directives: {
    clickOutside: vClickOutside.directive
  },

  props: {
    currSorting: {
      type: String,
      default: ''
    },

    list: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    setSort(variant) {
      this.$emit('set-sort', variant);
      this.close();
    },

    close() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.sorting-dropdown {
  @include gt-sm {
    display: none;
  }

  @include lt-lg {
    box-sizing: border-box;
    padding: 8px 6px 8px 16px;
    position: fixed;
    z-index: 1000;
    left: 0;
    bottom: 0;
    height: 100%;
    max-height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: none;
    border-radius: 0;

    &__scroll {
      width: 100%;
      overflow: auto;
      box-sizing: border-box;
      position: fixed;
      left: 0;
      bottom: 0;
      height: fit-content;
      max-height: 90%;
      padding: 0 12px 8px 16px;
      background-color: #ffffff;
      border-radius: 16px 16px 0 0;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #eaeaea;
        border-radius: 2px;
        border: none;
      }

      &-title {
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
      }

      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;

        height: 64px;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: #1f2226;
        user-select: none;
        cursor: default;

        &:not(:last-child) {
          border-bottom: 1.5px solid #dde0e6;
        }
      }
    }
  }
}
</style>
