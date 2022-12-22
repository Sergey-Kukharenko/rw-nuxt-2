<template>
  <div class="timer">
    <svg-icon name="time" class="timer__icon" />

    <div class="timer__cells">
      <div class="timer__cell">Left</div>
      <span class="timer__cell">{{ hours }}h</span>
      <span class="timer__cell">{{ minutes }}m</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      isEnded: null,
      endDate: null
    };
  },

  mounted() {
    const time = new Date();
    time.setHours(time.getHours() + 3);
    this.endDate = time;
    this.tick();
    this.timer = setInterval(this.tick.bind(this), 1000);
  },

  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    updateRemaining(distance) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    },

    tick() {
      const currentTime = new Date();
      const distance = Math.max(this.endDate - currentTime, 0);
      this.updateRemaining(distance);

      if (distance === 0) {
        clearInterval(this.timer);
        this.isEnded = true;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.timer {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  font-family: $golos-bold;
  padding: 6px 10px;
  box-sizing: border-box;

  &__icon {
    width: 13.33px;
    height: 13.33px;
    fill: $color-dark-green;
  }

  &__text {
    font-family: $golos-bold;
    color: $color-dark-green;
    letter-spacing: -0.01em;
    font-size: 12px;
    line-height: 16px;
  }

  &__cells {
    display: flex;
    margin: 0 0 -1px 7px;
  }

  &__cell {
    font-family: $golos-bold;
    color: $color-dark-green;
    letter-spacing: -0.01em;
    font-size: 12px;
    line-height: 16px;
    margin-left: 4px;
  }
}
</style>
