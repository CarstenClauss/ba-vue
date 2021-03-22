import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(this.data, {
      borderWidth: '10px',
      hoverBackgroundColor: 'red',
      hoverBorderWidth: '10px',
      width: '1em',
    })
  },
}
