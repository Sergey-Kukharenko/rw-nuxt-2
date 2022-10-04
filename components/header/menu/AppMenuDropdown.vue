<template>
  <div class="dropdown">
    <div class="layout layout--horizontal-dt">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenuDropdown'
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: none;
  width: 100%;
  position: absolute;
  left: 0;
  background: #ffffff;
  box-shadow: 0 4px 16px #0000001f;
  border-radius: 16px;
  z-index: 1;
}
</style>
