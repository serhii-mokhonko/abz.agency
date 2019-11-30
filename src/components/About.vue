<template>
  <div class="container">
    <div class="container__content">
      <div class="block-title">
        <h2>Let's get acquainted</h2>
      </div>
      <div class="content">
        <div class="content__sidebar">
          <img src="../assets/man-mobile.svg" alt="images" />
        </div>
        <div class="content__main">
          <h3>I am cool frontend developer</h3>
          <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
          <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
          <a href="#" class="link">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../less/index.less";

.container__content {
  padding: 150px 0;
}

.content {
  &__sidebar {
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    img {
      width: 290px;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  }

  &__main {
    padding: 30px;

    h3 {
      margin-bottom: 20px;
    }

    p {
      font-size: 1.06rem;
      line-height: 1.46rem;
      margin-bottom: 30px;
    }
  }
}

//mobile
@media only screen and (max-width: 479px) {
  .container__content {
    padding: 75px 15px;
  }

  .content {
    flex-direction: column;

    &__main {
      text-align: center;
      padding: 30px 15px;

      h3 {
        max-width: 290px;
        margin: 0 auto 30px;
      }
    }
  }
}

//tablet
@media only screen and (min-width: 480px) and (max-width: 859px) {
  .container__content {
    padding: 75px 24px;
  }
}
</style>