<template>
  <div class="container">
    <div class="container__content">
      <div class="block-title">
        <h2>Register to get a work</h2>
      </div>
      <div class="block-title block-title--sub">
        <h5>Attention! After successful registration and alert, update the list of users in the block from the top</h5>
      </div>

      <form class="form">
        <div class="form-group">
          <label for="name" class="form-group__label">Name</label>
          <input type="text" id="name" placeholder="Your name" v-model="user.name" />
          <div class="invalid">Error</div>
        </div>
        <div class="form-group">
          <label for="email" class="form-group__label">Email</label>
          <input type="text" id="email" placeholder="Your email" v-model="user.email" />
          <div class="invalid">Error</div>
        </div>
        <div class="form-group">
          <label for="phone" class="form-group__label">Phone</label>
          <input type="text" id="phone" placeholder="+38(___)___ __ __" v-model="user.phone" />
          <div class="invalid">Error</div>
        </div>
        <div class="select-group">
          <abz-select @selectData="dataFromSelect" :positions="positions"></abz-select>
        </div>
        <div class="file-input-group">
          <div class="file-input">
            <input type="file" id="file-input" @change="onFileChange" />
            <label for="file-input" class="file-input__label">Upload your photo</label>
            <div class="btn-append">Upload</div>
          </div>
          <div class="assistive-text">File format jpg up to 5 MB, the minimum size of 70x70px</div>
          <div class="invalid">Error</div>
        </div>
        <div class="btn-wrap">
          <!-- <button class="btn btn--disabled" @click.prevent>Sign Up</button> -->
          <button class="btn btn--primary" @click.prevent="sendData">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Select from "./Select.vue";

export default {
  data() {
    return {
      positions: null,
      user: {
        name: null,
        email: null,
        phone: null,
        position_id: null,
        photo: null
      }
    };
  },
  methods: {
    dataFromSelect(obj) {
      this.user.position_id = obj.id;
    },
    async getPositions() {
      await fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
        .then(res => res.json())
        .then(data => {
          this.positions = data;
        });
    },
    //get file from the form
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.user.photo = files[0];
    },
    sendData () {
      console.log(this.user);
    }
  },
  created() {
    this.getPositions();
    // this.$store.dispatch('getToken');
  },
  components: {
    abzSelect: Select
  }
};
</script>

<style lang="less" scoped>
@import "../less/index.less";

.container__content {
  padding-bottom: 150px;
}

.form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  font-family: @sF;

  margin-top: 65px;
}
</style>