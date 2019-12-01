<template>
  <div id="app">
    <abz-nav></abz-nav>
    <abz-header></abz-header>
    <abz-about></abz-about>
    <abz-relationships></abz-relationships>
    <abz-requirements></abz-requirements>
    <abz-users></abz-users>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Relationships from "./components/Relationships.vue";
import Requirements from "./components/Requirements.vue";
import Users from "./components/Users.vue";

export default {
  name: "app",
  components: {
    abzNav: Nav,
    abzHeader: Header,
    abzAbout: About,
    abzRelationships: Relationships,
    abzRequirements: Requirements,
    abzUsers: Users
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
