<template>
  <div class="filter" :class="{ active: filter.isActive }" @click="toggleFilter('filter')">
    <div class="filter__header">
      <div class="filter__header-title">{{ filter.title }}</div>
      <div class="filter__header-chevron">
        <svg-icon class="filter__header-chevron-icon" name="chevron" />
      </div>
    </div>
    <div ref="filter-content" class="filter__body" :style="maxHeightOfContent" @click.stop>
      <div v-if="filter.type === $options.FILTER_TYPES.range" class="filter__body-item range">
        <label class="range__input">
          <div class="range__input-area">
            <span class="title">{{ filter.title }} from</span>
            <input
              v-model.number="form.range.from"
              class="input"
              type="number"
              :placeholder="`${filter.from} £`"
              @input="handleRange"
            />
          </div>
        </label>
        <label class="range__input">
          <div class="range__input-area">
            <span class="title">Before</span>
            <input
              v-model.number="form.range.before"
              class="input"
              type="number"
              :placeholder="`${filter.before} £`"
              @input="handleRange"
            />
          </div>
        </label>
      </div>

      <div v-else-if="filter.type === $options.FILTER_TYPES.checkbox" class="filter__body-item checkbox">
        <div v-for="(option, idx) in getFilterList(filter)" :key="idx" class="checkbox__item">
          <app-checkbox :value="form.checkbox" :name="option.name" @change="handleCheckbox($event, option.name)">
            {{ option.name }}
          </app-checkbox>
        </div>
        <div v-if="isVisibleToggler(filter)" class="show" @click="toggleFilter('list')">
          {{ getToggleFilterListText(filter.isListOpened) }}
        </div>
      </div>

      <div v-else-if="filter.type === $options.FILTER_TYPES.radio" class="filter__body-item radio">
        <div v-for="(option, idx) in getFilterList(filter)" :key="idx" class="radio__item">
          <app-radio :value="form.radio" :name="option.value" @change="handleRadio">
            {{ option.name }}
          </app-radio>
        </div>

        <div v-if="isVisibleToggler(filter)" class="show" @click="toggleFilter('list')">
          {{ getToggleFilterListText(filter.isListOpened) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';

import AppCheckbox from '@/components/shared/AppCheckbox';
import AppRadio from '@/components/shared/AppRadio';

import { LIST_ITEM_VIEW_COUNT, FILTER_TYPES } from '~/constants';

export default {
  name: 'CategoryFilterItem',

  components: {
    AppCheckbox,
    AppRadio
  },

  props: {
    filter: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      form: {
        range: {
          from: null,
          before: null
        },
        radio: null,
        checkbox: []
      }
    };
  },

  FILTER_TYPES,

  computed: {
    maxHeightOfContent() {
      return this.filter.isActive && { maxHeight: this.$refs['filter-content']?.scrollHeight + 120 + 'px' };
    }
  },

  methods: {
    getFilterList(filter) {
      return !filter?.isListOpened && filter.list.length > LIST_ITEM_VIEW_COUNT
        ? filter.list.slice(0, LIST_ITEM_VIEW_COUNT)
        : filter.list;
    },

    isVisibleToggler(filter) {
      return filter.list?.length > LIST_ITEM_VIEW_COUNT;
    },

    getToggleFilterListText(status) {
      return status ? 'Roll up' : 'Show all';
    },

    toggleFilter(key) {
      const toggleKeys = {
        filter: 'isActive',
        list: 'isListOpened'
      };

      this.$emit('toggle-filter', {
        title: this.filter.title,
        key: toggleKeys[key],
        status: this.filter[toggleKeys[key]]
      });
    },

    handleRange: debounce(function () {
      if (
        this.form.range.from > this.filter.from &&
        this.form.range.from <= this.filter.before &&
        this.form.range.before >= this.form.range.from &&
        this.form.range.before <= this.filter.before
      ) {
        this.emitForm(FILTER_TYPES.range);
      }
    }, 500),

    handleRadio(value) {
      this.form.radio = value;

      this.emitForm(FILTER_TYPES.radio);
    },

    handleCheckbox(value, name) {
      if (!value) {
        this.form.checkbox.splice(this.form.checkbox.indexOf(name), 1);
      } else {
        this.form.checkbox.push(value);
      }

      this.emitForm(FILTER_TYPES.checkbox);
    },

    emitForm(type) {
      this.$emit('change-filter', { type, filterKey: this.filter.title, value: this.form[type] });
    },

    clearForm() {
      this.form = {
        range: {
          from: null,
          before: null
        },
        radio: null,
        checkbox: []
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  overflow: hidden;

  &:first-child &__header {
    padding-top: 0;
  }

  &:last-child &__header {
    padding-bottom: 0;
  }

  &:last-child &__body {
    border-bottom: none;
  }

  &.active {
    &:not(:first-child) .filter__header {
      padding-bottom: 12px;
    }

    .filter__header-chevron-icon {
      transform: rotate(-180deg);
    }

    .checkbox__item,
    .radio__item {
      &:not(:first-child) {
        margin-top: 12px;
      }
    }

    .range {
      padding-top: 0;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 20px 0;

    @include lt-md {
      padding: 12px 0;
    }

    &-title {
      font-family: $golos-medium;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
    }

    &-chevron-icon {
      width: 11px;
      height: 6.33px;
      fill: $color-dark-grey;
      transition: transform 0.2s ease-in-out;
    }
  }

  &__body {
    max-height: 0;
    overflow: hidden;
    will-change: max-height;
    transition: all 0.25s ease-out;
    border-bottom: 1px solid #eaeaea;

    &-item {
      .show {
        margin-top: 10px;
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: $color-white-grey;
        cursor: pointer;
      }
    }

    .range {
      display: flex;
      gap: 8px;
      padding-bottom: 24px;
      flex-direction: row;
      align-items: center;

      &__input-area {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        height: 56px;
        border-radius: 10px;
        background-color: $bg-grey;
        padding: 10px 16px 6px 16px;
        box-sizing: border-box;

        .title {
          font-family: $golos-regular;
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: -0.154px;
          color: $color-white-grey;

          @include lt-md {
            font-size: 11px;
          }
        }

        .input {
          outline: none;
          width: 100%;
          background-color: transparent;
          border: none;
          height: 24px;
          padding: 0;
          font-family: $golos-bold;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: $color-dark-grey;

          &::placeholder {
            font-family: $golos-bold;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #cccccc;
          }
        }
      }
    }

    .checkbox,
    .radio {
      padding-bottom: 20px;

      @include lt-md {
        padding-bottom: 16px;
      }

      &__item {
        transition: margin-top 0.25s ease-out;
        margin-top: 0px;
      }
    }
  }
}
</style>
