
<template>
  <div class="section">
    <div v-if="isTitle" class="section__title">{{ section.title }}</div>

    <div :class="classNames">
      <div
        v-for="(item, idx) in section.list"
        :key="idx"
        class="list__item"
      >
        <div class="container">
          <div v-if="item.icon" class="container__figure">
            <svg-icon
              :name="item.icon"
              v-bind="item.style"
            />
          </div>
          <div class="container__text">
            {{ item.text }}
            <span v-if="item.from" class="text-grey">{{item.from}}</span>
          </div>
          <app-badge
            v-if="item.status"
            class="container__badge"
            theme="orange"
            size="xs"
          >
            {{ item.status }}
          </app-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useClassNameProp} from '~/helpers';
import AppBadge from '~/components/shared/AppBadge';

export default {
  name: 'AppMenuSection',
  components: {AppBadge},
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
    isTitle() {
      return this.section.title
    },

    classNames() {
      return useClassNameProp(this.theme, 'list')
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  color: #000;
  margin: 24px 0 18px;

  &__title {
    font-family: $golos-bold;
    font-size: 16px;
    line-height: 20px;
    padding: 0 16px;
  }
}

.list {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 32px);
  margin: 12px 0;
  position: relative;

  &--md {
    grid-template-rows: repeat(7, 32px);
  }

  &--lg {
    grid-template-rows: repeat(10, 32px);
  }

  &__item {
    display: flex;
    padding: 0 40px 0 16px;
    cursor: pointer;

    &:hover {
      .container {
        transform: translateX(6px);
      }
    }
  }
}

.text-grey {
  color: $color-white-grey;
}

.container {
  display: flex;
  align-items: center;
  transition: transform .15s ease 0s;

  &__figure {
    width: 21px;
    height: 21px;
    flex-shrink: 0;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    flex: 1;
    font-family: $golos-regular;
    font-size: 14px;
    line-height: 20px;
  }

  &__badge {
    margin-left: 6px;
  }
}

.sections__item {
  &:not(:first-child){
    .list__item {
      border-left: 1px solid #EAEAEA;
    }
  }
}
</style>
