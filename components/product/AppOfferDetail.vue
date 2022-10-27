<template>
  <div :class="classNames">
    <div class="title" @click="isVisible = !isVisible">
      <span class="title__text">Bouquet stems</span>
      <svg-icon name="arrow-down-thin" class="title__icon icon"/>
    </div>
    <div class="list">
      <div v-for="(item, idx) in list" :key="idx" class="list__item">
        <div class="card">
          <div class="card__text">{{ item.title }}</div>
          <div class="card__points"></div>
          <div class="card__text">{{ item.quantity }}{{ item.quantityUnit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useToggleClassName} from '@/helpers';

export default {
  name: 'AppFooterSection',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isVisible: false
    };
  },

  computed: {
    classNames() {
      return useToggleClassName(this.isVisible, 'offer-detail', 'active');
    }
  }
};
</script>

<style lang="scss" scoped>
.offer-detail {
  max-width: 252px;
  font-family: $golos-regular;

  &--active {
    & .icon {
      transform: rotate(180deg);
    }

    & .list {
      display: block;
    }
  }
}

.title {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;

  &__text {
    @include gt-sm {
      font-size: 15px;
      line-height: 24px;
    }

    @include lt-md {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__icon {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }
}

.list {
  display: none;
  margin: 16px 0;

  &__item {
    margin-top: 7px;
  }
}

.card{
  display: flex;
  align-items: baseline;

  &__text{
    flex-shrink: 0;
    font-size: 16px;
    line-height: 24px;
  }

  &__points{
    flex: 1;
   border-bottom: 1px dotted #ccc;
  }
}
</style>
