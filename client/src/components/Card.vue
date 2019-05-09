<template>
  <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">{{ task.title }} <span style="cursor: pointer" @click="deleteTask(task.id)" class="float-right"><i class="fas fa-trash-alt"></i></span></div>
    <div class="card-body">
      <p
        class="card-text"
      >{{ task.description }}</p>
      <p>{{ task.date.slice(0, 10) }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["task"],
  computed: {
    ...mapState([""])
  },
  methods: {
    ...mapActions(["deleteTaskAction", "updateTaskAction"]),
    deleteTask(id) {
      this.deleteTaskAction(id)
    },
    updateTask(id) {

    }
  }
};
</script>
