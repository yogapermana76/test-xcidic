<template>
  <div id="app">
    <Navbar></Navbar>

    <router-view style="margin-top: 100px"></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Navbar
  },
  created() {
    this.findAllTaskAction()
    if (localStorage.getItem("token")) {
      this.$store.commit("successLogin");
    }
  },
  computed: {
    ...mapState(["tasks"])
  },
  methods: {
    ...mapActions(["findAllTaskAction"])
  },
}
</script>
