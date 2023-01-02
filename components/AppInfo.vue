<template>
  <div v-if="isInfo" class="info layout">
    <div class="info__head">
      <div class="info__head-title">
        {{ info.head.title }}
      </div>
      <div class="info__head-list">
        <div class="info__head-list--title">
          {{ info.head.list.title }}
        </div>
        <div class="info__head-list--items items">
          <ul class="items__list list">
            <li v-for="item in info.head.list.items" :key="item" class="list__item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info__grid">
      <div
        v-for="(item, index) in info.grid"
        :key="index"
        class="info__grid-item item"
        :class="{ active: item.is_active }"
      >
        <div class="item__title" @click="toggleGridItem(index, item.is_active)">
          {{ item.title }}
          <svg-icon name="arrow-down" class="item__title-icon" />
        </div>
        <div class="item__text">
          {{ item.text }}
          <ul v-if="isListEmpty(item)" class="item__text-list">
            <li v-for="(el, idx) in item.list" :key="idx" class="item__text-list-item">{{ el }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { useObjectNotEmpty } from '~/helpers';

export default {
  name: 'AppInfo',

  computed: {
    ...mapGetters({ info: 'pages/home/getInfo' }),

    isInfo() {
      return useObjectNotEmpty(this.info);
    }
  },

  methods: {
    toggleGridItem(index, status) {
      this.info.grid[index].is_active = !status;
    },

    isListEmpty(item) {
      return item?.list?.length;
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding-left: 15px;

  @include lt-md {
    li::marker {
      transform: scale(0.8);
    }
  }
}

.info {
  display: flex;
  flex-direction: column;

  @include gt-sm {
    gap: 48px;

    padding-bottom: 58px;
  }

  @include lt-md {
    gap: 24px;

    padding-bottom: 0;
  }

  &__head {
    &-title {
      font-style: normal;
      color: $color-dark-grey;

      @include gt-sm {
        font-family: $Literata;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;

        margin-bottom: 32px;
      }

      @include lt-md {
        font-family: $golos-bold;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.03px;

        margin-bottom: 16px;
      }
    }

    &-list {
      font-family: $golos-regular;
      font-style: normal;
      font-weight: 400;
      color: $color-dark-grey;

      @include gt-sm {
        font-size: 16px;
        line-height: 24px;
      }

      @include lt-md {
        font-size: 11px;
        line-height: 16px;
        letter-spacing: -0.01em;
      }
    }
  }

  &__grid {
    display: flex;

    @include gt-sm {
      flex-wrap: wrap;
      gap: 20px;
    }

    @include lt-md {
      flex-direction: column;
      gap: 16px;
    }

    .item {
      @include gt-sm {
        flex: calc(50% - 20px);
      }

      @include lt-md {
        flex: 1;
      }

      &.active {
        @include lt-md {
          .item__title-icon {
            opacity: 1;
            transform: rotate(-180deg);
          }

          .item__text {
            display: block;
          }
        }
      }

      &__title {
        font-family: $golos-bold;
        font-style: normal;
        font-weight: 600;
        color: $color-dark-grey;

        @include gt-sm {
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 0.01em;

          margin-bottom: 16px;
        }

        @include lt-md {
          display: flex;
          justify-content: space-between;
          align-items: center;

          font-size: 14px;
          line-height: 20px;

          margin-bottom: 8px;
        }

        &-icon {
          @include gt-sm {
            display: none;
          }

          @include lt-md {
            width: 16px;
            height: 16px;
            opacity: 0.3;
            transition: transform 0.25s ease-in;
          }
        }
      }

      &__text {
        font-family: $golos-regular;
        font-style: normal;
        font-weight: 400;
        color: $color-dark-grey;
        white-space: pre-line;

        margin-bottom: 8px;

        @include gt-sm {
          font-size: 16px;
          line-height: 24px;
        }

        @include lt-md {
          display: none;

          font-size: 11px;
          line-height: 16px;
          letter-spacing: -0.01em;
        }
      }
    }
  }
}
</style>
