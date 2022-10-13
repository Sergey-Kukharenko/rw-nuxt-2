<template>
  <section class="layout section">
    <h2 class="title">{{ section.title }}</h2>

    <app-section-grid-sm
      v-slot="slotProps"
      :slides="section.list"
      :theme="theme"
    >
      <app-card-sm :slide="{ ...slotProps }" />
    </app-section-grid-sm>
  </section>
</template>

<script>
import AppSectionGridSm from '~/components/shared/AppSectionGridSm';
import AppCardSm from '~/components/shared/AppCardSm';

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
    }
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: $Literata;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;

  @include gt-sm {
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 22px 0;
  }

  @include lt-md {
    font-size: 20px;
    line-height: 24px;
    margin: 0 0 16px 0;
  }
}
</style>
