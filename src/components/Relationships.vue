<template>
  <div class="container" id="relationships">
    <div class="container__content">
      <div class="block-title">
        <h2>About my relationships with web-development</h2>
      </div>
      <div class="content">
        <div class="content__block">
          <img src="../assets/html.svg" alt="image" />
          <h3>I'm in love with HTML</h3>
          <p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.</p>
        </div>
        <div class="content__block">
          <img src="../assets/css.svg" alt="image" />
          <h3>CSS is my best friend</h3>
          <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
        </div>
        <div class="content__block">
          <img src="../assets/javascript.svg" alt="image" />
          <h3>JavaScript is my passion</h3>
          <p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../less/index.less";

.container__content {
  padding-bottom: 140px;
}

.content {
  margin-top: 60px;
}
.content__block {
  width: 100%;
  margin-right: 30px;

  img {
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 20px;
  }
  p {
    font-size: 1.06rem;
    line-height: 1.46rem;
  }
}

//mobile
@media only screen and (max-width: 425px) {
  .container__content {
    padding-bottom: 70px;
  }

  .content {
    flex-direction: column;
    width: 100%;
    min-width: 290px;
    margin: 0 auto;

    &__block {
      margin-top: 30px;
      text-align: center;
    }
  }
}

//tablet
@media only screen and (min-width: 426px) and (max-width: 768px) {
  .container__content {
    padding-bottom: 120px;
  }

  .content {
    flex-direction: column;
  }
  .content__block {
    max-width: 600px;
    margin: 0 auto;
    img {
      height: 100%;
      margin-right: 30px;
      display: block;
      float: left;
    }
  }
}
</style>