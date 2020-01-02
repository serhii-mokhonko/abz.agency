<template>
  <div class="container">
    <div class="container__content">
      <div class="block-title">
        <h2 class="text-white">General requirements for the test task</h2>
      </div>
      <div class="content">
        <div class="man-laptop">
          <img src="../assets/man-laptop-v1.svg" alt="image" class="man-laptop__desktop" />
          <img src="../assets/man-laptop-v2.svg" alt="image" class="man-laptop__tablet" />
        </div>
        <div class="content__text text-white">
          <p>Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
          <p>If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
          <p>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../less/index.less";

.container {
  background: url("../assets/third-block-bg/third-block-bg-1024x755.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;

  &__content {
    padding-top: 140px;
    padding-bottom: 140px;
  }
}

.block-title {
  margin-bottom: 60px;
}

.content {
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;

  &__text {
    max-width: 450px;
    p {
      font-size: 1.06rem;
      line-height: 1.46rem;
      margin-bottom: 30px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

// mobile
@media only screen and (max-width: 425px) {
  .container {
    background: url("../assets/third-block-bg/third-block-bg-320x1031.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &__content{
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }
  .content {
    flex-direction: column;
  }
  
  .man-laptop {
    margin: 0 auto 30px;
    img{
      max-width: 290px;
      height: auto;
    }
  }
  .man-laptop__desktop {
    display: none;
  }
}

// tablet
@media only screen and (min-width: 426px) and (max-width: 768px) {
  .container {
    background: url("../assets/third-block-bg/third-block-bg-768x878.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &__content{
      padding-top: 120px;
      padding-bottom: 120px;
    }
  }

  .block-title {
    max-width: 415px;
    margin-bottom: 54px;
  }
  .man-laptop__desktop {
    display: none;
  }
}

//desktop
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .man-laptop__tablet {
    display: none;
  }
}

// 2K
@media only screen and (min-width: 1025px) {
  .container {
    background: url("../assets/third-block-bg/third-block-bg-2560x692.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .man-laptop {
    width: 50%;
    display: flex;
    justify-content: center;

    &__tablet {
      display: none;
    }
  }
}
</style>