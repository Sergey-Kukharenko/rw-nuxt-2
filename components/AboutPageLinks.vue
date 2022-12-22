<template>
  <div class="links layout">
    <about-page-link
      v-for="(item, index) in $options.INFO_BUTTONS"
      :key="index"
      :text="item.text"
      :images="item.images"
    />
  </div>
</template>

<script>
import { INFO_BUTTONS } from '~/constants';

export default {
  name: 'AboutPageLinks',

  INFO_BUTTONS
};
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  gap: 24px;

  @include lt-md {
    display: none;
  }
}
</style>
