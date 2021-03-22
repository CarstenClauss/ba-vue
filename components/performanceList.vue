<template>
  <div class="PerformanceWrapper">
    <render-form @clicked="AddComponents" />
    <div class="PerformanceComponentContainer">
      <div
        v-for="(item, i) in Numbers"
        :key="item.id"
        class="PerformanceComponentList"
        :style="{ backgroundColor: item }"
      >
        #{{ ++i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      count: 0,
      Numbers: [],
    }
  },
  updated() {
    return <div>Hello world</div>
  },
  methods: {
    AddComponents(value) {
      this.count = value
      this.Numbers = Array.from(
        { length: value },
        () =>
          // eslint-disable-next-line unicorn/number-literal-case
          '#' + ((Math.random() * 0xffffff) << 0).toString(16)
      )
    },
  },
}
</script>

<style>
.PerformanceWrapper {
  width: calc(100% - 1.3em);
  margin: 0 0.7em;
}

.PerformanceComponentContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0 2em;
  justify-content: center;
}

.PerformanceComponentList {
  margin: 5px;
  height: 40px;
  width: 40px;
  font-size: 0.5em;
}

.ComponentCube {
  margin: 5px;
  height: 40px;
  width: 40px;
  font-size: 0.5em;
}
</style>
