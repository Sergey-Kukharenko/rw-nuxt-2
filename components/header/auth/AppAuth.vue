<template>
  <div class="container">
    <div class="container__header">
      <div class="container__layout">
        Вход или регистрация
      </div>
    </div>

    <div class="container__body">
      <div class="container__layout">
        FORM
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAuth',

  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>
.container {
  @include gt-sm {
    width: 392px;
    box-sizing: border-box;
  }

  &__layout {
    @include gt-sm {
      padding: 0 24px;
    }
  }

  &__header{
    font-family: $golos-bold;
    font-size: 24px;
    line-height: 28px;
    padding: 24px 0;
    border-bottom: 1px solid #dde0e6;
  }

  &__body {
    @include gt-sm {
      margin-top: 24px;
      height: 305px;
    }

    @include lt-md {
      margin: 0;
    }
  }
}

.profile-form {

}
</style>
