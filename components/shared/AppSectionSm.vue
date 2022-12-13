<template>
  <div :class="classNames">
    <section :class="classNamesSection">
      <div class="header">
        <h2 class="title">{{ section.title }}</h2>
        <p v-if="section.subTitle" class="subtitle">{{ section.subTitle }}</p>
      </div>

      <app-section-grid-sm
        v-slot="slotProps"
        :slides="section.list"
        :theme="theme"
      >
        <app-card-sm :slide="{ ...slotProps }" />
      </app-section-grid-sm>
    </section>
  </div>
</template>

<script>
import AppSectionGridSm from '~/components/shared/AppSectionGridSm';
import AppCardSm from '~/components/shared/AppCardSm';
import {useClassNameProp} from '~/helpers';

export default {
  name: 'AppSectionSm',

  components: {AppCardSm, AppSectionGridSm},

  props: {
    section: {
      type: Object,
      default: () => ({})
    },

    theme: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    }
  },

  computed: {
    classNamesSection() {
      return useClassNameProp(this.theme, 'section')
    },

    classNames() {
      return ['layout', this.name]
    },
  }
};
</script>

<style lang="scss" scoped>
.header {
  @include gt-sm {
    margin-bottom: 24px;
  }

  @include lt-md {
    margin-bottom: 16px;
  }
}

.title {
  margin: 0;
}

.subtitle {
  font-family: $golos-regular;

  @include gt-sm {
    font-size: 12px;
    line-height: 16px;
    margin: 8px 0 0;
  }

  @include lt-md {
    font-size: 12px;
    line-height: 16px;
    margin: 8px 0 0;
  }
}

.section {
  &--custom {
    .header {
      @include lt-md {
        background: #f7f7f7;
        border-radius: 12px;
        margin-bottom: 12px;
        padding: 14px 6px 14px;
        text-align: center;
      }
    }

    .title{
      @include lt-md {
        letter-spacing: -0.01em;
      }
    }

    .subtitle {
      @include lt-md {
        margin: 4px 0 0;
      }
    }
  }
}
</style>
