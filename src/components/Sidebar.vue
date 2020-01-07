<template>
  <div class="container">
    <div class="sidebar" :class="{'sidebar--show': show}">
      <div class="user">
        <div class="user__info">
          <span class="name">Superstar</span>
          <span class="email">Superstar@gmail.com</span>
        </div>
        <div class="user__avatar">
          <img src="../assets/user-superstar.jpg" alt="avatar" class="user__avatar" />
        </div>
      </div>
      <ul>
        <li>
          <a href="#" @click="$emit('change', !show)">About me</a>
        </li>
        <li>
          <a href="#" class="active" @click="$emit('change', !show)">Relationships</a>
        </li>
        <li>
          <a href="#" @click="$emit('change', !show)">Requirements</a>
        </li>
        <li>
          <a href="#" @click="$emit('change', !show)">User</a>
        </li>
        <li>
          <a href="#" @click="$emit('change', !show)">Sign Up</a>
        </li>
        <li>
          <a href="#" @click="$emit('change', !show)">Sign Out</a>
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
      show: Boolean
  }
};
</script>

<style lang="less" scoped>
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