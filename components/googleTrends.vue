<template>
  <google-trend id="google-trend" />
</template>

<script>
/* eslint-disable nuxt/no-globals-in-created */
/* eslint-disable no-undef */
import Vue from 'vue'

Vue.component('google-trend', {
  mounted() {
    const script = document.createElement('script')
    script.src = 'https://ssl.gstatic.com/trends_nrtr/2431_RC03/embed_loader.js'
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      trends.embed.renderExploreWidgetTo(
        document.getElementById('trends'),
        'TIMESERIES',
        {
          comparisonItem: [
            { keyword: 'React', geo: '', time: 'today 5-y' },
            { keyword: 'Vue', geo: '', time: 'today 5-y' },
            { keyword: 'Angular', geo: '', time: 'today 5-y' },
          ],
          category: 733,
          property: '',
        },
        {
          exploreQuery: 'cat=733&date=today%205-y&q=React,Vue,Angular',
          guestPath: 'https://trends.google.com:443/trends/embed/',
        }
      )
    }
  },
  template: '<div :id="trends" ></div>',
})
export default {}
</script>

<style>
#google-trend {
  max-width: 500px;
  margin: 0 auto;
}
</style>
