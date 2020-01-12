<template>
  <div class="footer-top">
    <div class="footer__logo">
      <a href="#">
        <svg>
          <use xlink:href="../../assets/logo-2.svg#logo-main" />
        </svg>
      </a>
    </div>
    <nav class="footer__nav">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.route">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      return this.$store.getters.getLinks;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../less/index.less";
.footer-top {
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #5f5fc4;
}

.footer__logo {
  svg {
    width: 134px;
    height: 24px;
    fill: #fff;
  }
}

.footer__nav {
  ul li {
    display: inline;
    color: #fff;
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
    a {
      color: #fff;
      &:hover {
        color: @primary-hov;
      }
    }
  }
}

@media only screen and (max-width: 425px) {
  .footer-top {
    height: auto;
    flex-direction: column;
    padding: 30px 0;
  }

  .footer__logo {
    margin-bottom: 30px;
  }

  .footer__nav {
    text-align: center;
    ul li {
      display: block;
      margin-right: 0;
      margin-top: 15px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>