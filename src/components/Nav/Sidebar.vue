<template>
  <div class="container">
    <div class="sidebar" :class="{'sidebar--show': show}">
      <div class="user">
        <div class="user__info">
          <span class="name">Superstar</span>
          <span class="email">Superstar@gmail.com</span>
        </div>
        <div class="user__avatar">
          <img src="../../assets/user-superstar.jpg" alt="avatar" class="user__avatar" />
        </div>
      </div>
      <ul>
        <li v-for='(item, index) in navLinks' :key='index'  @click="$emit('change', !show)">
          <router-link :to='item.route'>{{ item.name }}</router-link>
        </li>
        <li @click="$emit('change', !show)">
          <a href="#">Sign Out</a>
        </li>
      </ul>
    </div>
    <div class="maskcontent" :class="{'maskcontent--show': show}" @click="$emit('change', !show)"></div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "show",
    event: "change"
  },
  props: {
      show: Boolean,
      navLinks: Array
  }
};
</script>

<style lang="less" scoped>
@import "../../less/index.less";

.maskcontent {
  display: none;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  transition: 0.5s;
}
.maskcontent--show {
  display: block;
}

.sidebar {
  width: 100%;
  max-width: 259px;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  overflow-y: scroll;

  transition: 0.5s;
  transform: translateX(-260px);

  & ul,
  & .user {
    padding-left: 24px;
  }

  ul li {
    margin-top: 32px;

    &:first-child {
      margin-top: 34px;
    }

    .active {
      color: @secondary;
    }
  }
}

.sidebar--show {
  transform: translateX(0px);
}

.user {
  display: flex;
  flex-direction: column-reverse;
  padding-top: 30px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e1e1e1;

  &__info {
    .name {
      display: block;
      font-size: 1.33rem;
      margin-bottom: 12px;
    }

    .email {
      display: block;
      font-size: 0.86rem;
      color: #8d8c8c;
    }
  }

  &__avatar {
    width: 67px;
    height: 67px;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 19px;
  }
}
</style>