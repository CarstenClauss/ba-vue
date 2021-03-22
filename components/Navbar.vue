<template>
  <nav class="NavWrapper">
    <div class="NavigationWrapper">
      <div class="Navigation">
        <nuxt-link to="/" class="NavigationButton">
          <a>Home</a>
        </nuxt-link>
        <nuxt-link to="/support" class="NavigationButton">
          <a>Support</a>
        </nuxt-link>
        <nuxt-link to="/performance" class="NavigationButton">
          <a>Performance</a>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style>
.NavWrapper {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  padding: 1em 1em 0.5em;
  width: 100%;
}

.NavigationWrapper {
  width: calc(100% - 30%);
  padding: 1rem 15%;
  border: 1px solid white;
}

.Navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
a {
  font-weight: lighter;
}

a:hover {
  font-weight: bolder;
}

.NavigationButton {
  cursor: pointer;
  text-decoration: none;
  color: white;
  padding: 0 1em;
  line-height: 2em;
  letter-spacing: 0.25em;
  font-weight: 300;
}
.NavigationButton:hover {
  color: #01c58e;
}
</style>
