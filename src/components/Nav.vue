<template>
  <div class="container">
    <div class="container__content">
      <div class="logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>
      <nav class="nav">
        <ul>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#" class="active">Relationships</a>
          </li>
          <li>
            <a href="#">Requirements</a>
          </li>
          <li>
            <a href="#">User</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
      <div class="user">
        <div class="user__info">
          <span class="name">Superstar</span>
          <span class="email">Superstar@gmail.com</span>
        </div>
        <img src="../assets/user-superstar.jpg" alt="avatar" class="user__avatar" />
        <button class="btn btn--icon">
          <img src="../assets/sign-out.svg" alt="logout" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../less/index.less";
.container__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  img {
    height: 26px;
  }
}
.nav {
  li {
    list-style-type: none;
    display: inline;
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
    .active {
      color: @secondary;
    }
  }
}
.user {
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__info {
    padding: 8px 0;
    .name {
      display: block;
      font-size: 0.93rem;
    }

    .email {
      display: block;
      font-size: 0.8rem;
      color: #8d8c8c;
    }
  }

  &__avatar {
    width: 40px;
    height: auto;
    overflow: hidden;
    border-radius: 50%;
  }
}

.btn {
  cursor: pointer;
  &--icon {
    background: none;
    outline: none;
    border: none;
  }
}
</style>