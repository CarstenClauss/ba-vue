<template>
  <div class="container">
    <div>
      <Navbar />
      <div class="ContainerView">
        <div class="title">
          <h1>Vue</h1>
        </div>
        <p class="p">
          This application was built in terms of a bachelor thesis in Media
          Systems of the Hamburg University of Applied Sciences from Carsten
          Clauss in 2021. The Thesis is about a comparison of the Javascript
          Frameworks Angular, React and Vue. For the comparison I built three
          same-looking Applications with the help of each Framework.
          <br />
          This Application is built with
          <i class="title">Vue</i>
        </p>
        <div class="imageDiv">
          <img class="img" src="../assets/logo.png" alt="vue" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  width: 100%;
  color: white;
  min-height: 100%;
}

.center {
  height: 100%;
  padding: 0 1em;
  margin: 0.1em 0;
}

.title {
  margin: 0 0.3em;
  font-size: 1.2em;
  font-style: italic;
  font-weight: bold;
  color: #01c58e;
}

.imageDiv {
  display: flex;
  justify-content: center;
  margin: 2.5em 1em 5em;
}

.img {
  width: 300px;
  height: auto;
}
</style>
