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
        <div class="form-group" :class="{error: $v.user.name.$error}">
          <label for="name" class="form-group__label">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            v-model="user.name"
            @blur="$v.user.name.$touch()"
          />
          <div class="invalid" v-if="!$v.user.name.required">This field is required!</div>
          <div
            class="invalid"
            v-if="!$v.user.name.minLength || !$v.user.name.maxLength"
          >Length of field must be between 2 and 60 characters!</div>
        </div>
        <div class="form-group" :class="{error: $v.user.email.$error}">
          <label for="email" class="form-group__label">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Your email"
            v-model="user.email"
            @blur="$v.user.email.$touch()"
          />
          <div class="invalid" v-if="!$v.user.email.required">This field is required!</div>
          <div class="invalid" v-if="!$v.user.email.email">Enter valid email, please!</div>
        </div>
        <div class="form-group" :class="{error: $v.user.phone.$error}">
          <label for="phone" class="form-group__label">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="+38(___)___ __ __"
            v-model="user.phone"
            @blur="$v.user.phone.$touch()"
          />
          <div class="invalid" v-if="!$v.user.phone.required">This field is required!</div>
          <div class="invalid" v-if="!$v.user.phone.maxLength || !$v.user.phone.minLength">Enter valid phone number!</div>
          <div class="invalid" v-if="!$v.user.phone.checkNumber">Number should start with code of Ukraine +380. For example: +380XXXXXXXXX</div>
        </div>
        <div class="select-group">
          <abz-select @selectData="dataFromSelect" :positions="positions" ></abz-select>
        </div>
        <div class="file-input-group" :class="{error: $v.user.photo.$error}">
          <div class="file-input">
            <label for="file-input" class="file-input__label">{{user.photo ? user.photo.name :"Upload your photo"}}</label>
            <input type="file" id="file-input" accept=".jpeg, .jpg" ref='fileInput' @change="onFileChange"/>
            <div class="btn-append" @click="uploadPhoto()">Upload</div>
          </div>
          <div class="assistive-text">File format jpg up to 5 MB, the minimum size of 70x70px</div>
          <div class="invalid" v-if="!$v.user.photo.required">Required field!</div>
          <div class="invalid" v-if="!$v.user.photo.fileType">File forman isn't jpg / jpeg!</div>
          <div class="invalid" v-if="!$v.user.photo.fileSize">File size more than 5 Mb!</div>
        </div>
        <div class="btn-wrap">
          <button class="btn" @click.prevent="sendData()" :class="[!$v.$invalid ? 'btn--primary' : 'btn--disabled' ]" :disabled="$v.$invalid">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Select from "./Select.vue";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

//check out 4 first characters of phone namber
const checkNumber = (val) => {
  if (val) {
    return val.slice(0, 4) === "+380";
  }
  return true;
};

//check out file type
const fileType = (val) => {
  if(val){
    return val.type == "image/jpeg";
  }
  return true;
};

//check out file size
const fileSize = (val) => {
  if(val){
    return val.size < 5*1024*1024;
  }
  return true;
}

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
      await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
      )
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
      this.$v.user.photo.$touch();
    },
    sendData() {
      console.log(this.user);
    },
    uploadPhoto () {
			this.$refs.fileInput.click()
		},
  },
  created() {
    this.getPositions();
    // this.$store.dispatch('getToken');
  },
  components: {
    abzSelect: Select
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(60)
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        maxLength: maxLength(13),
        minLength: minLength(13),
        checkNumber
      },
      photo: {
        required,
        fileType,
        fileSize
      }
    }
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