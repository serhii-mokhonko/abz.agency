<template>
  <div>
    <abz-about></abz-about>
    <abz-relationships></abz-relationships>
    <abz-requirements></abz-requirements>
    <abz-users></abz-users>
    <abz-register></abz-register>
  </div>
</template>

<script>
import About from "./About.vue";
import Relationships from "./Relationships.vue";
import Requirements from "./Requirements.vue";
import Users from "./Users.vue";
import Register from "./Register/Register.vue";

export default {
  components: {
    abzAbout: About,
    abzRelationships: Relationships,
    abzRequirements: Requirements,
    abzUsers: Users,
    abzRegister: Register
  }
};
</script>