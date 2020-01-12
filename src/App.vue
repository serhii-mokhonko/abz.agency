<template>
  <div id="app">
    <abz-nav></abz-nav>
    <abz-header></abz-header>
    <router-view></router-view>
    <abz-footer></abz-footer>
  </div>
</template>

<script>
import Nav from "./components/Nav/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

export default {
  name: "app",
  components: {
    abzNav: Nav,
    abzHeader: Header,
    abzFooter: Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Overpass:400,600|Source+Sans+Pro:400,700&display=swap");
</style>

<style lang="less">
@import "./less/index.less";

html {
  font-family: @mF;
  font-size: 15px;
  margin-top: 64px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
