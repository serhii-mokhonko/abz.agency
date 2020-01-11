<template>
  <div class="container" id="user">
    <div class="container__content">
      <div class="block-title">
        <h2>Our cheerful users</h2>
      </div>
      <div class="block-title block-title--sub">
        <h5>Attention! Sorting users by registration date</h5>
      </div>
      <div class="users">
        <div class="user" v-for="user in users" :key="user.id">
          <div class="user__avatar">
            <img :src="user.photo" alt="avatar" />
          </div>
          <div class="user__info">
            <h4 class="user__name">{{ user.name }}</h4>
            <div class="user__position">{{ user.position }}</div>
            <div class="user__email">{{ user.email }}</div>
            <div class="user__phone">{{ user.phone }}</div>
          </div>
        </div>
      </div>
      <div class="btn-wrap" v-if="LoadedData.total_users > users.length">
        <button class="btn btn--secondary" @click="loadData(page)">Show more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    page() {
      return this.$store.getters.getPage;
    },
    users() {
      return this.$store.getters.getUsers;
    },
    LoadedData() {
      return this.$store.getters.getLoadedData;
    }
  },

  methods: {
    loadData(page) {
      this.$store.dispatch("loadUsers", page);
    }
  },

  mounted() {
    this.loadData(this.page);
  }
};
</script>

<style lang="less" scoped>
@import "../less/index.less";

.container__content {
  padding-top: 140px;
  padding-bottom: 140px;
}

.users {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.user {
  width: 100%;
  max-width: 290px;
  margin-top: 65px;

  display: flex;
  justify-content: flex-start;

  overflow: hidden;
  &__avatar {
    padding-right: 9px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }

  &__name {
    padding: 25px 0;
  }

  &__position,
  &__email,
  &__phone {
    font-size: 0.94rem;
    color: #4c4b4b;
  }
}

// mobile
@media only screen and (max-width: 425px) {
  .container__content {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .user {
    margin: 0 auto 30px;

    flex-direction: column;
    justify-content: center;
    text-align: center;

    &__avatar {
      padding: 0;
    }
    &__name {
      padding: 14px 0;
    }
  }
}

// tablet
@media only screen and (min-width: 426px) and (max-width: 768px) {
  .container__content {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  .user {
    max-width: 220px;
    margin-top: 42px;
    flex-direction: column;
    text-align: center;

    &__avatar {
      padding: 0;
    }
    &__name {
      padding: 15px 0;
    }
  }
}

//2K
@media only screen and (min-width: 1025px) {
  .user {
    max-width: 360px;
  }
}
</style>