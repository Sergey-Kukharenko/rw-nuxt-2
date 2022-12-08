<template>
  <div>
    <template v-if="$device.isMobileOrTablet">
      Mobile
    </template>

    <template v-else>
      DESKTOP
    </template>
  </div>
</template>

<script>


export default {
  name: 'DefaultLayout',
  components: {

  }
};
</script>

<style lang="scss" scoped>
.header-group {
  border-bottom: 1px solid #e5e5e5;
}
</style>
