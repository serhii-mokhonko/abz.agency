<template>
  <div class="container">
    <div class="container__content">
      <header class="header">
        <h1 class="header__title text-white">Test assignment for Frontend Developer position</h1>
        <p
          class="header__desc text-white"
        >We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>
        <button class="btn btn--primary">Sign Up</button>
      </header>
    </div>
  </div>
</template>

<style lang="less" scoped>
//main desktop
.container {
  height: 723px;
  background: url("../assets/banner-bg/banner-bg-1204x723.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
}

.header {
  max-width: 450px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  &__title,
  &__desc {
    margin-bottom: 45px;
  }
}

// mobile
@media only screen and (max-width: 479px) {
  .container {
    height: 393px;
    background: url("../assets/banner-bg/banner-bg-320x393.jpg");
    background-size: cover;
    background-position: center center;

    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
    }
  }

  .header {
    text-align: center;
    width: 290px;

    &__title,
    &__desc {
      margin-bottom: 30px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}

// tablet
@media only screen and (min-width: 480px) and (max-width: 859px) {
  .container {
    height: 622px;
    background: url("../assets/banner-bg/banner-bg-768x622.jpg");
    background-size: cover;
    background-position: center center;

    &__content {
      padding: 0 24px;
    }
  }
}

// 2K
@media only screen and (min-width: 1921px) {
  .container {
    height: 676px;
    background: url("../assets/banner-bg/banner-bg-2K.jpg");
    background-size: cover;
    background-position: center center;
  }
}
</style>