<template>
  <div class="container">
    <div class="container__content">
      <div class="logo">
        <svg>
          <use xlink:href="../assets/logo-2.svg#logo-main" />
        </svg>
      </div>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="#aboutMe" exact>About me</router-link>
          </li>
          <li>
            <router-link to="#relationships" exact>Relationships</router-link>
          </li>
          <li>
            <router-link to="#requirements" exact>Requirements</router-link>
          </li>
          <li>
            <router-link to="#user" exact>User</router-link>
          </li>
          <li>
            <router-link to="#signUp" exact>Sign Up</router-link>
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
          <svg width="24px" height="20px">
            <use xlink:href="../assets/sign-out.svg#sign-out" />
          </svg>
        </button>
      </div>
      <div class="menu-gadget" @click="showSidebar = !showSidebar">
        <button class="btn btn--icon">
          <img src="../assets/line-menu.svg" alt="line-menu" />
        </button>
      </div>
    </div>
    <abz-sidebar v-model="showSidebar" />
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  data() {
    return {
      showSidebar: false
    };
  },
  components: {
    abzSidebar: Sidebar
  }
};
</script>

<style lang="less" scoped>
@import "../less/index.less";

.container {
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 1000;
}
.container__content {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  svg {
    height: 24px;
    width: 134px;
    fill: #181818;
  }
}
.nav {
  li {
    list-style-type: none;
    display: inline;
    margin-right: 25px;

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

.menu-gadget {
  display: none;
}

//mobile
@media only screen and (max-width: 425px) {
  .nav,
  .user {
    display: none;
  }

  .menu-gadget {
    display: block;
  }
}

// tablet
@media only screen and (min-width: 426px) and (max-width: 768px) {
  .nav,
  .user {
    display: none;
  }

  .menu-gadget {
    display: block;
  }
}
</style>