<template>
  <div class="Wrapper">
    <div class="small">
      <pie-chart v-if="loaded" :data="datacollection"></pie-chart>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PieChart from './PieChart.js'

const vm = {
  reactNPM: 1,
  vueNPM: 2,
  angularNPM: 3,
}

export default {
  components: {
    PieChart,
  },
  data: () => ({
    loaded: false,
    datacollection: null,
  }),
  async mounted() {
    this.loaded = false
    try {
      await axios
        .get('https://api.npmjs.org/downloads/point/last-week/react')
        .then((response) => {
          vm.reactNPM = response.data.downloads
        })
      await axios
        .get('https://api.npmjs.org/downloads/point/last-week/vue')
        .then((response) => {
          vm.vueNPM = response.data.downloads
        })
      await axios
        .get('https://api.npmjs.org/downloads/point/last-week/angular')
        .then((response) => {
          vm.angularNPM = response.data.downloads
        })
      this.datacollection = {
        labels: ['React', 'Vue', 'Angular'],
        datasets: [
          {
            label: '# of Votes',
            data: [vm.reactNPM, vm.vueNPM, vm.angularNPM],
            backgroundColor: ['#2296F3', '#F44335', '#FFCA28'],
          },
        ],
      }
      this.loaded = true
    } catch (err) {
      // console.warn(err)
    }
  },
}
</script>

<style>
.Wrapper {
  background-color: white;
  padding: 1em;
  color: black;
}
.small {
  max-width: 300px;
  margin: 50px auto;
}
</style>
