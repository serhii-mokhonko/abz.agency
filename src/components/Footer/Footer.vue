<template>
  <footer>
    <div class="container">
      <div class="container__content">
        <footer-top />
        <footer-middle />
        <footer-bottom />
      </div>
    </div>
  </footer>
</template>

<script>
import FooterTop from "./FooterTop.vue";
import FooterMiddle from "./FooterMiddle.vue";
import FooterBottom from "./FooterBottom.vue";

export default {
  components: {
    footerTop: FooterTop,
    footerMiddle: FooterMiddle,
    footerBottom: FooterBottom
  }
};
</script>

<style lang="less" scoped>
@import "../../less/index.less";

footer {
  background-color: @secondary;
  color: #fff;
}
</style>