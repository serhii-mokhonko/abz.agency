<template>
  <div class="container">
    <div class="container__content">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bg-settings () {
  min-height: 100vh;
}

@media only screen and (max-width: 321px) {
  .container {
    .bg-settings;
    background: url("../assets/banner-bg/banner-bg-320x393.jpg");
    background-size: cover;
    background-position: center center;
  }
}
@media only screen and (min-width: 322px) and (max-width: 768px) {
  .container {
    .bg-settings;
    background: url("../assets/banner-bg/banner-bg-768x622.jpg");
    background-size: cover;
    background-position: center center;
  }
}

@media only screen and (min-width: 1204px) and (max-width: 1919px) {
  .container {
    .bg-settings;
    background: url("../assets/banner-bg/banner-bg-1204x723.jpg");
    background-size: cover;
    background-position: center center;
  }
}
@media only screen and (min-width: 1920px) {
  .container {
    .bg-settings;
    background: url("../assets/banner-bg/banner-bg-2K.jpg");
    background-size: cover;
    background-position: center center;
  }
}
</style>