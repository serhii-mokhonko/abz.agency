<template>
  <div class="select-container">
    <div class="select-input" @click="visible = !visible">
      <span class="select-input__content">{{ selected.name }}</span>
    </div>
    <ul class="option" v-if="visible">
      <li
        class="option__item"
        v-for="item of options.positions"
        :key="item.id"
        :class="{selected: item.id == position}"
        @click="selectPosition(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'position',
    event: 'change'
  },
  props: {
    position: {
      type: Number
    }
  },
  data() {
    return {
      visible: false,
      options: null
    }
  },
  computed: {
    selected () {
      if(this.position){
        const options = this.options['positions'];
        return options.find(el => el.id == this.position);
      }else {
        return {id: null, name: "Select your position"}
      }
    }
  },
  methods: {
    selectPosition(item) {
      this.$emit("change", item.id);
      this.visible = !this.visible;
    }
  },
  created () {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then(res => res.json())
      .then(data => {
        this.options = data;
      });
  }
};
</script>

<style lang="less" scoped>
.select-container {
  width: 100%;
  margin-bottom: 100px;
  position: relative;
}

//SELECT
.select-input {
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #b7b7b7;
  border-radius: 3px;

  &::after {
    content: "";
    width: 16px;
    height: 9px;
    background: url("../../assets/caret-down.svg") no-repeat;
    position: absolute;
    top: 50%;
    right: 16px;
    z-index: 99;
    transform: translate(0, -50%);
  }

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
  border-radius: 3px;
  box-shadow: 1px 1px 7px #b7b7b7;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 100;

  &__item {
    list-style: none;
    width: 100%;
    height: 47px;
    padding: 0 16px;
    background: #fff;
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