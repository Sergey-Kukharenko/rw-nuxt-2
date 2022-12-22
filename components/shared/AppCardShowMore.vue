<template>
  <a class="card">
    <div class="container">
      <div class="group">
        <div class="title">
          <div class="title__plus">+</div>
          <div class="title__count">38</div>
        </div>
        <div class="subtitle">bouquets inside</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer__text">Show more bouquets</div>
      <div class="footer__circle">
        <svg-icon name="arrow-right" class="icon" />
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'AppCardShowMore'
};
</script>

<style lang="scss" scoped>
.card {
  display: block;
  width: 100%;
  height: 100%;
  background: #ebfaf0;
  box-sizing: border-box;
  color: $color-dark-green;

  @include gt-sm {
    font-family: $golos-bold;
    padding: 16px;
    border-radius: 12px 12px 64px 12px;
  }

  @include lt-md {
    font-family: $golos-medium;
    padding: 8px;
    border-radius: 8px;
  }
}

.container {
  @include gt-sm {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 240px;
    background: #ffffff;
    border-radius: 12px 12px 64px 12px;
  }

  @include lt-md {
    display: none;
  }
}

.title {
  display: flex;
  align-items: center;

  &__plus {
    font-size: 24px;
    margin-right: 2px;
  }

  &__count {
    font-size: 72px;
  }
}

.subtitle {
  max-width: 116px;
  font-size: 24px;
  text-align: center;
  margin-top: 3px;
}

.footer {
  display: flex;
  align-items: center;

  @include gt-sm {
    margin-top: 27px;
    justify-content: space-between;
  }

  @include lt-md {
    justify-content: center;
  }

  &__text {
    @include gt-sm {
      max-width: 90px;
      font-size: 16px;
    }

    @include lt-md {
      font-size: 13px;
    }
  }

  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;

    @include gt-sm {
      width: 50px;
      height: 50px;
    }

    @include lt-md {
      width: 24px;
      height: 24px;
      margin-left: 8px;
    }

    & .icon {
      @include gt-sm {
        width: 32px;
        height: 32px;
      }

      @include lt-md {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
