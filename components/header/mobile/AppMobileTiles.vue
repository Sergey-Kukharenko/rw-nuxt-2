<template>
  <div class="section">
    <div v-if="section.title" class="section__title">
      {{ section.title }}
    </div>
    <div :class="classNames">
      <div v-for="(item, idx) in section.list" :key="idx" class="list__item">
        <div class="figure">
          <svg-icon
            :name="item.icon"
            class="figure__icon"
            :class="item.icon"
          />
        </div>
        <div class="figcaption">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {useClassNameProp} from '~/helpers';

export default {
  name: 'AppMobileTiles',

  props: {
    section: {
      type: Object,
      default: () => ({})
    },

    theme: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return useClassNameProp(this.theme, 'list');
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  &__title {
    font-family: $golos-bold;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin: 14px 0 16px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    text-align: center;
    background: #f7f7f7;
    border-radius: 10px;
    padding: 11px 2px;
    box-sizing: border-box;
  }

  &--outline {
    & .list__item {
      background: #ffffff;
      border: 1px solid #e8e8e8;
    }
  }
}

.figure {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 24px;
  height: 24px;

  &__icon {
    width: 24px;
    height: 24px;
  }
}

.figcaption {
  display: flex;
  align-items: center;
  min-height: 26px;
  font-family: $golos-regular;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.066px;
  margin-top: 7px
}
</style>
