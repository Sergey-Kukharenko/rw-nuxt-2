<template>
  <div class="sections">
    <div v-for="(item, idx) in section" :key="idx" class="sections__item">
      <slot v-bind="{ ...item }"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenuSections',

  props: {
    section: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.sections {
  display: flex;
  margin: 0 -16px;
}
</style>
