<template>
  <div class="select-container">
    <div class="select-input" @click="visible = !visible">
      <span class="select-input__content">{{ content }}</span>
    </div>
    <ul class="option" v-if="visible" @click="selectPosition($event)">
      <li class="option__item" v-for="(option, index) of options" :key="index" :value="option.id">
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false, // options area visible or not
      content: "Select Your Possition", //element which will be select by user
      selected: 1, //for selected element
      //here is array of objects
      options: [
        {
          id: 0,
          name: "Option 1"
        },
        {
          id: 1,
          name: "Option 2"
        },
        {
          id: 2,
          name: "Option 3"
        },
      ]
    };
  },
  methods: {
    // find necessary element in array and display it
    selectPosition(event) {
      const value = event.target.getAttribute("value");
      const el = this.options.findIndex((el) => el.id === +value);
      this.content = this.options[el].name;
      this.visible = !this.visible;
    }
  },
  created() {
    // fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     console.log(data);
    //     // process success response
    //   });
  }
};
</script>

<style lang="less" scoped>
.select-container {
  width: 100%;
  margin-bottom: 100px;
}

//SELECT
.select-input {
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #b7b7b7;
  border-radius: 3px;
  position: relative;

  &__content {
    font-size: 1.06rem;
    display: block;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
}

//OPTIONS
.option {
  border: 1px solid #b7b7b7;
  border-radius: 0 0 3px 3px;
  width: 100%;
  position: absolute;

  &__item {
    list-style: none;
    width: 100%;
    height: 47px;
    padding: 0 16px;
    background: #fff;
    // position: relative;
    cursor: pointer;

    &:before {
         content: "";
         display: inline-block;
         height: 100%;
         vertical-align: middle;
    }

    &:hover {
      background: #fce2cc;
    }
  }

  .selected {
      color: #f07611;
  }
}
</style>