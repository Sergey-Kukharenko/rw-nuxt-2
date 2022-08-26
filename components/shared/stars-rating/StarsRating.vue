<template>
  <div class="vue3-star-ratings__wrapper">
    <div class="vue3-star-ratings">
      <button
        v-if="showControl"
        :style="{
          ...generateSameWidthAndHeight(controlSize),
          backgroundColor: controlBg,
          color: controlColor,
        }"
        @click="decreaseRating"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 792.082 792.082"
          :style="{
            ...generateSameWidthAndHeight(
              numberMinusFifteenPercent(controlSize)
            ),
          }"
        >
          <path
            d="M317.896 396.024l304.749-276.467c27.36-27.36 27.36-71.677 0-99.037s-71.677-27.36-99.036 0L169.11 342.161c-14.783 14.783-21.302 34.538-20.084 53.897-1.218 19.359 5.301 39.114 20.084 53.897l354.531 321.606c27.36 27.36 71.677 27.36 99.037 0s27.36-71.677 0-99.036L317.896 396.024z"
          />
        </svg>
      </button>
      <div
        ref="starsContainer"
        class="stars"
        :style="{ pointerEvents: disableClick ? 'none' : 'auto' }"
      >
        <div class="stars-outer" :style="{ color: inactiveColor }">
          <star-icon
            v-for="i in numberOfStars"
            :key="i"
            :style="{
              ...generateSameWidthAndHeight(starSize),
            }"
          >
          </star-icon>
        </div>
        <div class="stars-inner" :style="{ width: percent, color: starColor }">
          <star-icon
            v-for="i in numberOfStars"
            :key="i"
            :style="{
              ...generateSameWidthAndHeight(starSize),
            }"
          >
          </star-icon>
        </div>
      </div>
      <button
        v-if="showControl"
        :style="{
          ...generateSameWidthAndHeight(starSize),
          backgroundColor: controlBg,
          color: controlColor,
        }"
        @click="increaseRating"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 792.082 792.082"
          :style="{
            ...generateSameWidthAndHeight(
              numberMinusFifteenPercent(controlSize)
            ),
          }"
        >
          <path
            d="M622.955 342.127L268.424 20.521c-27.36-27.36-71.677-27.36-99.037 0s-27.36 71.676 0 99.037l304.749 276.468-304.749 276.466c-27.36 27.359-27.36 71.676 0 99.036s71.677 27.36 99.037 0l354.531-321.606c14.783-14.783 21.302-34.538 20.084-53.897 1.186-19.36-5.301-39.114-20.084-53.898z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import StarIcon from '@/components/shared/stars-rating/StarIcon';

export default {
  name: 'StarsRating',
  components: { StarIcon },
  props: {
    starColor: {
      type: String,
      default: "#FFCD1E",
    },
    inactiveColor: {
      type: String,
      default: "#F7F7F7",
    },
    starSize: {
      type: String,
      default: "32",
    },
    controlBg: {
      type: String,
      default: "#2e5090",
    },
    controlColor: {
      type: String,
      default: "#fff",
    },
    controlSize: {
      type: String,
      default: "24",
    },
    numberOfStars: {
      type: Number,
      default: 5,
    },
    showControl: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Number,
      default: 1,
    },
    disableClick: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    return {
      rating: this.modelValue || 0,
    };
  },
  computed: {
    // rating: {
    //   get() {
    //     return this.modelValue
    //   },
    //
    //   set(newVal) {
    //     this.$emit('update:modelValue', +newVal)
    //   }
    // },

    roundedRating() {
      return this.rounded(this.rating, 1);
    },
    percent() {
      return (this.roundedRating / this.numberOfStars) * 100 + "%";
    },
  },
  watch: {
    roundedRating() {
      this.$emit("update:modelValue", this.roundedRating);
    },
  },
  mounted() {
    const starsCont = this.$refs.starsContainer;
    const self = this;

    starsCont.addEventListener("click", function(e) {
      const relativeX = e.pageX - this.offsetLeft;
      self.rating = (relativeX / this.offsetWidth) * self.numberOfStars;
    });
  },
  methods: {
    increaseRating() {
      if (this.rating < this.numberOfStars) {
        this.rating += this.step;
      } else if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }
      if (this.rating > this.numberOfStars) {
        this.rating = this.numberOfStars;
      }
    },
    decreaseRating() {
      if (this.rating <= 0) {
        return;
      } else {
        this.rating -= this.step;
      }

      if (this.rating < 0) {
        this.rating = 0;
      }
    },

    rounded(value, decimalPlaces) {
      const power = 10 ** decimalPlaces;
      return Math.round(value * power) / power;
    },
    numberMinusFifteenPercent(value) {
      const num = +value;
      return this.rounded(num - num * 0.15, 0);
    },
    generateSameWidthAndHeight(size) {
      return {
        width: size + "px",
        height: size + "px",
      };
    },
  },
};
</script>

<style scoped>
.vue3-star-ratings__wrapper {
  display: block;
  margin: 25px auto;
  text-align: center;
  padding: 25px;
}

.vue3-star-ratings {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vue3-star-ratings button {
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}

.vue3-star-ratings button svg {
  fill: currentColor;
}

.stars {
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.stars-outer,
.stars-inner {
  height: inherit;
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  max-width: 100%;
  min-width: 0;
  white-space: nowrap;
  transition: 320ms cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: hidden;
}
.stars svg {
  display: inline-block;
  fill: currentColor;
  cursor: pointer;
}
</style>
