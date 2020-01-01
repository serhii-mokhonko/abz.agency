<template>
  <div class="footer-middle">
    <div class="footter__contacts">
      <ul>
        <li>
          <img src="../../assets/mail.svg" alt="email" class="contact-icon" />
          work.of.future@gmail.com
        </li>
        <li>
          <img src="../../assets/phone.svg" alt="phone" class="contact-icon" />
          +38 (050) 789 24 98
        </li>
        <li>
          <img src="../../assets/cellphone.svg" alt="cellphone" class="contact-icon" />
          +38 (095) 556 08 45
        </li>
      </ul>
    </div>

    <div class="footer__resource">
      <ul>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Partners</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Design</a>
        </li>
        <li>
          <a href="#">Code</a>
        </li>
        <li>
          <a href="#">Collaborate</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">Tutorials</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="#">Guides</a>
        </li>
        <li>
          <a href="#">Examples</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Conditions</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../less/index.less";

.footer-middle {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}

.footter__contacts {
  ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 22px;
  }

  .contact-icon {
    margin-right: 10px;
  }
}

.footer__resource {
  display: flex;
  justify-content: space-between;
  flex-basis: 60%;
  text-align: right;

  ul li {
    margin-bottom: 18px;
  }

  ul li a {
    color: #fff;

    &:hover {
      color: @primary-hov;
    }
  }
}

//tablet
@media only screen and (min-width: 426px) and (max-width: 768px) {
  .footter__contacts {
    ul li {
      margin-bottom: 30px;
    }
    .contact-icon {
      display: none;
    }
  }
}

//mobile
@media only screen and (max-width: 425px) {
  .footer-middle {
    display: block;
    text-align: center;
  }
  .footer__resource {
    display: none;
  }

  .footter__contacts {
    ul li {
      display: block;
    }
    .contact-icon {
      display: none;
    }
  }
}
</style>