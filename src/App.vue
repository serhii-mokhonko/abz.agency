<template>
  <div id="app">
    <abz-nav></abz-nav>
    <abz-header></abz-header>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    abzNav: Nav,
    abzHeader: Header
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Overpass:400,600|Source+Sans+Pro:400,700&display=swap");
</style>

<style lang="less">
@import "./less/index.less";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: @mF;
  font-size: 15px;
}

.container {
  width: 100%;
  margin: 0 auto;

  &__content {
    width: 100%;
    max-width: 1170px;
    min-width: 320px;
    margin: 0 auto;
  }
}
</style>
