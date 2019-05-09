<template>
  <div class="home container">
    <div class="row" v-if="isLogin && role == 'employee'">
      <div class="col-md-3" v-for="(task, index) in tasks" :key="index">
        <Card :task="task" class="shadow-lg"></Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Card
  },
  computed: {
    ...mapState(["isLogin", "role", "tasks"])
  }
};
</script>
