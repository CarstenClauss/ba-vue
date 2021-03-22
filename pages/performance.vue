<template>
  <div class="container">
    <Navbar />
    <div class="SupportWrapper">
      <div class="ContainerView">
        <div class="title">
          <h1>Performance</h1>
        </div>
        <p>
          How long does it take to render x components? You need to use the
          Developer Tools to check.
        </p>
        <performance-list />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import performanceList from '../components/performanceList.vue'
export default {
  components: { performanceList },
}
</script>

<style>
.PerformanceWrapper {
  height: 100vh;
}
</style>
