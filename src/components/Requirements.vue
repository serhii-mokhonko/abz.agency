<template>
  <div class="container">
    <div class="container__content">
      <div class="block-title">
        <h2 class="text-white">General requirements for the test task</h2>
      </div>
      <div class="content">
        <div class="man-laptop">
          <img src="../assets/man-laptop-v1.svg" alt />
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
.container {
//   height: 755px;
  background: url("../assets/third-block-bg/third-block-bg-1024x755.jpg");
  background-size: 100%;
  background-position: center center;

  &__content {
      padding-top: 140px;
      padding-bottom: 140px;
  }
}

.block-title {
  max-width: 100%;
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
      font-size: 1rem;
      line-height: 1.37rem;
      margin-bottom: 30px;

      &:last-child{
          margin-bottom: 0;
      }
    }
  }
}

// mobile
@media only screen and (max-width: 425px) {
  .container {
    // height: 1031px;
    background: url("../assets/third-block-bg/third-block-bg-320x1031.jpg");
    background-size: cover;
    background-position: center center;
  }
}

// tablet
@media only screen and (min-width: 426px) and (max-width: 768px) {
  .container {
    // height: 878px;
    background: url("../assets/third-block-bg/third-block-bg-768x878.jpg");
    background-size: cover;
    background-position: center center;
  }
}

// 2K
@media only screen and (min-width: 1025px) {
  .container {
    // height: 692px;
    background: url("../assets/third-block-bg/third-block-bg-2560x692.jpg");
    background-size: cover;
    background-position: center center;
  }
}
</style>