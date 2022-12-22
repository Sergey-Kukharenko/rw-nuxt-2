<template>
  <div class="grid">
    <div v-for="(slide, idx) in slides" :key="idx" class="grid__item">
      <slot v-bind="{ ...slide }" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppGrid',

  props: {
    slides: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;

  @include gt-sm {
    grid-template-columns: repeat(auto-fill, minmax(22%, 1fr));
    grid-gap: 16px;
    row-gap: 32px;
  }

  @include sm {
    grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
    grid-gap: 16px;
    row-gap: 32px;
  }

  @include xs {
    grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
    grid-gap: 10px;
    row-gap: 12px;
  }
}
</style>
