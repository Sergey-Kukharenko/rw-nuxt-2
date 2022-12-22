<template>
  <div class="section">
    <div class="header">
      {{ section.title }}
    </div>

    <div :class="classNames">
      <div v-for="(item, idx) in section.list" :key="idx" class="list__item">
        <div class="figure">
          <img :src="item.img" class="figure__img" :alt="item.title" />

          <app-badge v-if="item.status" class="figure__badge" theme="white" size="xs">
            {{ item.status }}
          </app-badge>
        </div>
        <div class="figcaption">{{ item.title }}</div>
      </div>

      <div v-if="isAdditionally" class="list__item list__item--additionally">
        <div class="figure">
          <img :src="section.additionally.img" class="figure__img" :alt="section.additionally.title" />
        </div>
        <div class="figcaption">{{ section.additionally.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBadge from '~/components/shared/AppBadge';
import { useClassNameProp } from '~/helpers';

export default {
  name: 'AppMobileProducts',

  components: { AppBadge },

  props: {
    section: {
      type: Object,
      default: () => ({})
    },

    size: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNames() {
      return useClassNameProp(this.size, 'list');
    },

    isAdditionally() {
      return this.section?.additionally?.title;
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  margin: 17px 0 0;
}

.header {
  font-family: $golos-bold;
  font-size: 14px;
  line-height: 16px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 12px -3px;

  &__item {
    width: calc(33.3333% - 6px);
    text-align: center;
    margin: 7px 3px;

    &--additionally {
      width: calc(66.6666% - 6px);

      & .figure {
        border: 1px dashed #767676;
        box-sizing: border-box;
      }

      & .figcaption {
        opacity: 0.5;
      }
    }
  }

  &--md {
    & .figure {
      height: 64px;
      border-radius: 12px;
    }

    & .figcaption {
      font-size: 11px;
      line-height: 16px;
      margin-top: 3px;
    }
  }
}

.figure {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  height: 82px;
  border-radius: 10px;
  overflow: hidden;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 3;
  }

  &__badge {
    position: absolute;
    top: 4px;
    left: 1px;
  }
}

.figcaption {
  font-family: $golos-regular;
  font-size: 12px;
  line-height: 12px;
  padding: 0 2px;
  margin-top: 10px;
}
</style>
