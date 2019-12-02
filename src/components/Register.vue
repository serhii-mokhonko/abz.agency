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
        <div class="input">
          <label for="name" class="input__label">Name</label>
          <input type="text" id="name" placeholder="Your name" required />
          <div class="input-invalid">Error</div>
        </div>
        <div class="input error">
          <label for="email" class="input__label">Name</label>
          <input type="text" id="email" placeholder="Your email" required />
          <div class="input-invalid">Error</div>
        </div>
        <div class="input">
          <label for="phone" class="input__label">Name</label>
          <input type="text" id="phone" placeholder="+38(___)___ __ __" required />
          <div class="input-invalid">Error</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../less/index.less";

.form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;

  margin-top: 65px;
}
</style>