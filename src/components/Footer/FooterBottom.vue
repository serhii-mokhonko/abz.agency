<template>
  <div class="footer__bottom">
    <div class="copyright">&copy; abz.agency specially for the test task</div>
    <div class="social">
      <ul>
        <li>
          <a href="#">
            <svg width="26px" height="26px">
              <use xlink:href="../../assets/social.svg#facebook" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="26px" height="26px">
              <use xlink:href="../../assets/social.svg#linkedin" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="26px" height="26px">
              <use xlink:href="../../assets/social.svg#instagram" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="26px" height="26px">
              <use xlink:href="../../assets/social.svg#twitter" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="26px" height="26px">
              <use xlink:href="../../assets/social.svg#pinterest" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../less/index.less";

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.social {
  ul {
    svg {
      fill: #fff;

      &:hover {
        fill: @primary;
      }
    }

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