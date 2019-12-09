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
          <input type="text" id="name" placeholder="Your name" />
          <div class="invalid">Error</div>
        </div>
        <div class="form-group error">
          <label for="email" class="form-group__label">Email</label>
          <input type="text" id="email" placeholder="Your email" />
          <div class="invalid">Error</div>
        </div>
        <div class="form-group error">
          <label for="phone" class="form-group__label">Phone</label>
          <input type="text" id="phone" placeholder="+38(___)___ __ __" />
          <div class="invalid">Error</div>
        </div>
        <div class="select-group">
          <abz-select @selectData="getData" :positions="positions"></abz-select>
        </div>
        <div class="file-input-group error">
          <div class="file-input">
            <input type="file" id="file-input" />
            <label for="file-input" class="file-input__label">Upload your photo</label>
            <div class="btn-append">Upload</div>
          </div>
          <div class="assistive-text">File format jpg up to 5 MB, the minimum size of 70x70px</div>
          <div class="invalid">Error</div>
        </div>
        <div class="btn-wrap">
          <!-- <button class="btn btn--disabled" @click.prevent>Sign Up</button> -->
          <button class="btn btn--primary">Sign Up</button>
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
      selectData: {}
    };
  },
  methods: {
    getData(obj) {
      this.selectData = obj;
    },
    async getPositions() {
      await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      )
        .then(function(response) {
          return response.json();
        })
        .then(data => {
          this.positions = data;
        });
    }
  },
  created() {
    this.getPositions();
    this.$store.dispatch('getToken');
  },
  components: {
    abzSelect: Select
  }
};
</script>

<style lang="less" scoped>
@import "../less/index.less";

.container__content{
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