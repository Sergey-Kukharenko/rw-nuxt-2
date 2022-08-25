<template>
  <div class="profile">
    <app-dropdown>
      <template #button>
        <div class="card">
          <figure class="card__figure">
            <svg-icon name="profile" class="card__icon" />
          </figure>
          <figcaption class="card__figcaption">Log in / Register</figcaption>
        </div>
      </template>
      <template #dropdown>
        <div>dropdown content</div>
      </template>
    </app-dropdown>
  </div>
</template>

<script>
import AppDropdown from '@/components/shared/AppDropdown.vue'

export default {
  name: 'AppProfile',

  components: {
    AppDropdown
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;

  @include lt-md {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__figure {
    display: flex;
    align-items: center;
    justify-content: center;

    @include gt-sm {
      width: 28px;
      height: 28px;
      margin: 0 auto;
    }

    @include lt-md {
      width: 32px;
      height: 32px;
      background: #f7f7f7;
      border-radius: 50%;
    }
  }

  &__icon {
    fill: $color-light-grey;

    @include gt-sm {
      width: 26.45px;
      height: 24px;
    }

    @include lt-md {
      width: 12px;
      height: 12px;
    }
  }

  &__figcaption {
    text-align: center;
    color: $color-white-grey;

    @include gt-sm {
      font-family: $golos-medium;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      margin-top: 7px;
    }

    @include lt-md {
      font-family: $golos-regular;
      font-size: 12px;
      line-height: 16px;
      margin-left: 8px;
    }
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>
