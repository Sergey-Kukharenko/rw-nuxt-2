<template>
  <div class="something">
    <basket-something-title/>
    <basket-tab
      :list="tabList"
      @click="onClickTab"
    >
      <template #default="{ item }">
        <div class="something__tabs">
          <svg-icon
            class="something__tab-img"
            :name="item.icon"
          />
          <div>{{ item.label }}</div>
        </div>
      </template>
    </basket-tab>
    <basket-something-list :list="computedSomethingList"/>
  </div>
</template>

<script>
export default {
  name: "BasketSomething",
  data () {
    return {
      tabList: [{
        label: "Candies",
        icon: "candies"
      },{
        label: "Soft toys",
        icon: "soft-toys"
      },{
        label: "Balloons",
        icon: "balloons"
      },{
        label: "Toppers",
        icon: "toppers"
      }],
      tabActive: 0,
      somethingList: [
        {
          tab: "candies",
          img: "/examples/somethings/1.jpg",
          title: "Extra item name 1",
          price: 9.76
        },{
          tab: "candies",
          img: "/examples/somethings/2.jpg",
          title: "Extra item name 2",
          price: 9.77
        },{
          tab: "candies",
          img: "/examples/somethings/3.jpg",
          title: "Extra item name 3",
          price: 9.78
        },{
          tab: "candies",
          img: "/examples/somethings/4.jpg",
          title: "Extra item name 4",
          price: 9.79
        },{
          tab: "candies",
          img: "/examples/somethings/5.jpg",
          title: "Extra item name 5",
          price: 9.80
        },{
          tab: "candies",
          img: "/examples/somethings/6.jpg",
          title: "Extra item name 6",
          price: 9.81
        },{
          tab: "candies",
          img: "/examples/somethings/7.jpg",
          title: "Extra item name 7",
          price: 9.82
        },{
          tab: "candies",
          img: "/examples/somethings/8.jpg",
          title: "Extra item name 8",
          price: 9.83
        },{
          tab: "candies",
          img: "/examples/somethings/9.jpg",
          title: "Extra item name 9",
          price: 9.84
        },{
          tab: "candies",
          img: "/examples/somethings/10.jpg",
          title: "Extra item name 10",
          price: 9.85
        },{
          tab: "softToys",
          img: "/examples/somethings/11.jpg",
          title: "Extra item name 1",
          price: 9.76
        },{
          tab: "softToys",
          img: "/examples/somethings/12.jpg",
          title: "Extra item name 2",
          price: 9.77
        },{
          tab: "softToys",
          img: "/examples/somethings/13.jpg",
          title: "Extra item name 3",
          price: 9.78
        },{
          tab: "softToys",
          img: "/examples/somethings/14.jpg",
          title: "Extra item name 4",
          price: 9.79
        },{
          tab: "softToys",
          img: "/examples/somethings/15.jpg",
          title: "Extra item name 5",
          price: 9.80
        },{
          tab: "softToys",
          img: "/examples/somethings/16.jpg",
          title: "Extra item name 6",
          price: 9.81
        },{
          tab: "softToys",
          img: "/examples/somethings/17.jpg",
          title: "Extra item name 7",
          price: 9.82
        },{
          tab: "softToys",
          img: "/examples/somethings/18.jpg",
          title: "Extra item name 8",
          price: 9.83
        },{
          tab: "softToys",
          img: "/examples/somethings/19.jpg",
          title: "Extra item name 9",
          price: 9.84
        },{
          tab: "softToys",
          img: "/examples/somethings/20.jpg",
          title: "Extra item name 10",
          price: 9.85
        },{
          tab: "balloons",
          img: "/examples/somethings/21.jpg",
          title: "Extra item name 1",
          price: 9.76
        },{
          tab: "balloons",
          img: "/examples/somethings/22.jpg",
          title: "Extra item name 2",
          price: 9.77
        },{
          tab: "balloons",
          img: "/examples/somethings/23.jpg",
          title: "Extra item name 3",
          price: 9.78
        },{
          tab: "balloons",
          img: "/examples/somethings/24.jpg",
          title: "Extra item name 4",
          price: 9.79
        },{
          tab: "balloons",
          img: "/examples/somethings/25.jpg",
          title: "Extra item name 5",
          price: 9.80
        },{
          tab: "balloons",
          img: "/examples/somethings/26.jpg",
          title: "Extra item name 6",
          price: 9.81
        },{
          tab: "balloons",
          img: "/examples/somethings/27.jpg",
          title: "Extra item name 7",
          price: 9.82
        },{
          tab: "balloons",
          img: "/examples/somethings/28.jpg",
          title: "Extra item name 8",
          price: 9.83
        },{
          tab: "balloons",
          img: "/examples/somethings/29.jpg",
          title: "Extra item name 9",
          price: 9.84
        },{
          tab: "balloons",
          img: "/examples/somethings/30.jpg",
          title: "Extra item name 10",
          price: 9.85
        },{
          tab: "toppers",
          img: "/examples/somethings/31.jpg",
          title: "Extra item name 1",
          price: 9.76
        },{
          tab: "toppers",
          img: "/examples/somethings/32.jpg",
          title: "Extra item name 2",
          price: 9.77
        },{
          tab: "toppers",
          img: "/examples/somethings/33.jpg",
          title: "Extra item name 3",
          price: 9.78
        },{
          tab: "toppers",
          img: "/examples/somethings/34.jpg",
          title: "Extra item name 4",
          price: 9.79
        },{
          tab: "toppers",
          img: "/examples/somethings/35.jpg",
          title: "Extra item name 5",
          price: 9.80
        },{
          tab: "toppers",
          img: "/examples/somethings/36.jpg",
          title: "Extra item name 6",
          price: 9.81
        },{
          tab: "toppers",
          img: "/examples/somethings/37.jpg",
          title: "Extra item name 7",
          price: 9.82
        },{
          tab: "toppers",
          img: "/examples/somethings/38.jpg",
          title: "Extra item name 8",
          price: 9.83
        },{
          tab: "toppers",
          img: "/examples/somethings/39.jpg",
          title: "Extra item name 9",
          price: 9.84
        },{
          tab: "toppers",
          img: "/examples/somethings/40.jpg",
          title: "Extra item name 10",
          price: 9.85
        }
      ]
    };
  },
  computed: {
    computedSomethingList () {
      return this.somethingList.filter(item => item.tab === this.tabList[this.tabActive].icon);
    }
  },
  methods: {
    onClickTab (index) {
      this.tabActive = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.something {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 48px;
  width: 100%;

  @include lt-lg {
    margin-top: 44px;
    gap: 16px;
  }

  &__tabs {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;

    font-family: $golos-regular;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #000000;

    @include lt-lg {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__tab-img {
    width: 24px;
    height: 24px;

    @include lt-lg {
      width: 20px;
      height: 20px;
    }
  }
}

.basket-tab {
  @include lt-lg {
    overflow: scroll;
    scrollbar-width: none;
    width: calc(100% + 32px);
    margin-left: -16px;

    & > :first-child {
      margin-left: 16px;
    }

    & > :last-child {
      margin-right: 16px;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
