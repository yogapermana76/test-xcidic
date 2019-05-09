<template>
  <div class="card mb-3" style="max-width: 18rem;">
    <div class="card-header">
      {{ detail.title }}
      <span
        style="cursor: pointer"
        @click="deleteTask(detail._id)"
        class="float-right"
      >
        <i class="fas fa-trash-alt"></i>
      </span>
    </div>
    <div class="card-body">
      <p class="card-text">{{ detail.description }}</p>
      <p>{{ detail.date.slice(0, 10) }}</p>
      <button
        @click="findOneTask(detail._id)"
        class="btn btn-sm btn-outline-info float-right"
        data-toggle="modal"
        data-target="#updateTaskModal"
      >Edit</button>
    </div>
    <UpdateTaskModal :id="detail._id" :task="task"></UpdateTaskModal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import UpdateTaskModal from "@/components/UpdateTaskModal.vue";

export default {
  props: ["detail"],
  components: {
    UpdateTaskModal
  },
  computed: {
    ...mapState(["task"])
  },
  methods: {
    ...mapActions(["deleteTaskAction", "findOneTaskAction", "updateTaskAction"]),
    deleteTask(id) {
      this.deleteTaskAction(id)
    },
    findOneTask(id) {
      this.findOneTaskAction(id)
    },
    // updateTask(id) {
    //   this.updateTaskAction(id);
    // }
  }
};
</script>
