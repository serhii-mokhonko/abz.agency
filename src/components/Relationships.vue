<template>
  <div class="container">
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
.content {
  margin-top: 60px;
}
.content__block {
  width: 100%;
  max-width: 30%;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

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


@media only screen and (min-width: 480px) and (max-width: 859px) {

}

</style>