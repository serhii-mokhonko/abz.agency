<template>
  <div class="footer__bottom">
    <div class="copyright">&copy; abz.agency specially for the test task</div>
    <div class="social">
      <ul>
        <li>
          <a href="#">
            <img src="../../assets/facebook.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/linkedin.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/instagram.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/twitter.svg" alt="facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/pinterest.svg" alt="facebook" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.social {
  ul {
    & li {
      display: inline;
      margin-right: 22px;
    }

    li:last-child {
      margin-right: 0;
    }
  }
}

@media only screen and (max-width: 425px) {
  .footer__bottom {
    flex-direction: column-reverse;
  }

  .copyright {
    margin-top: 20px;
  }
}
</style>