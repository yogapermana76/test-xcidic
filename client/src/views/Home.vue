<template>
  <div class="home container">
    <div class="row" v-if="isLogin && role == 'employee'">
      <div class="col-md-3" v-for="(task, index) in tasks" :key="index">
        <Card :detail="task" class="shadow-lg"></Card>
      </div>
    </div>

    <div class="row" v-if="isLogin && role == 'manager'">
      <h3 class="mb-4">List All Activity of Employees</h3>
      <table class="table shadow">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Employee</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in allTask" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.date }}</td>
            <td>{{ task.userId.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view></router-view>
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
