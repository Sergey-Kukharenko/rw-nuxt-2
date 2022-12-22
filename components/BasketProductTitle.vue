<template>
  <div class="title">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: $golos-regular;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #1f2226;
  margin-bottom: 4px;

  @include lt-lg {
    font-size: 14px;
    line-height: 18px;
    color: #010810;
    letter-spacing: -0.02em;
  }
}
</style>
