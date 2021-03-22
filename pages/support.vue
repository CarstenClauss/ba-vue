<template>
  <div class="container">
    <Navbar />
    <div class="SupportWrapper">
      <div class="ContainerView">
        <div class="title">
          <h1>Support</h1>
        </div>
        <p>How often where React searched compared to other Frameworks?</p>
        <div class="SupportComponentContainer">
          <div id="trends">
            <div class="title">Google</div>
            <google-trends />
          </div>
          <div class="SupportChartWrapper">
            <div class="SupportChartContainer">
              <div class="title">Github-Stars</div>
              <div class="GithubWrapper">
                <github-stars />
              </div>
            </div>
            <div class="SupportChartContainer">
              <div class="title">npm Downloads</div>
              <div class="NPMWrapper">
                <npm-downloads />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import githubStars from '../components/githubStars.vue'
import GoogleTrends from '../components/googleTrends.vue'
import NpmDownloads from '../components/npmDownloads.vue'
export default {
  components: { githubStars, NpmDownloads, GoogleTrends },
}
</script>

<style>
#trends {
  height: 500px;
  padding: 1em;
  width: calc(100% - 2em);
}

.SupportWrapper {
  height: 100%;
}

.ContainerView {
  padding: 0 1em;
}

.SupportStyledTitle {
  margin: 0 0 0.5em 1em;
}

.SupportComponentContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 0 0 2em;
}

.ComponentWrapper {
  display: flex;
  flex-direction: row;
}

.SupportChartWrapper {
  display: flex;
  flex-direction: row;
}

.SupportChartContainer {
  padding: 1em;
  width: calc(100% - 2em);
}

.GithubWrapper {
  height: 50%;
  text-align: center;
  align-items: center;
}

.NPMWrapper {
  height: 50%;
  text-align: center;
  align-items: center;
}
</style>
