<template>
  <div class="home container">
    <div class="row" v-if="isLogin && role == 'employee'">
      <div class="col-md-3" v-for="(task, index) in tasks" :key="index">
        <Card :detail="task" class="shadow-lg"></Card>
      </div>
    </div>

    <div class="row" v-if="isLogin && role == 'manager'">
      {{ allTask }}
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Employee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bakso</td>
            <td><button class="btn btn-warning text-light">View</button></td>
          </tr>
        </tbody>
      </table>
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
    ...mapState(["isLogin", "role", "tasks", "allTask"])
  }
}
</script>
