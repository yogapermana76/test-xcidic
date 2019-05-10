<template>
  <div
    class="modal fade"
    id="updateTaskModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Task</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateTask(task._id)">
            <div class="form-group">
              <label for="title" class="col-form-label">Title: </label>
              <input type="text" class="form-control" v-model="title" placeholder="Title">
            </div>
            <div class="form-group">
              <label for="description" class="col-form-label">Description:</label>
              <textarea class="form-control" v-model="description" placeholder="Description"></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn text-light shadow"
                data-dismiss="modal"
                style="background-color: #38C6F0"
              >Cancel</button>
              <button
                type="submit"
                class="btn text-light shadow"
                style="background-color: #DD1C97"
              >Edit Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      description: ""
    };
  },
  computed: {
    ...mapState(["task"])
  },
  methods: {
    ...mapActions(["updateTaskAction"]),
    updateTask(id) {
      this.updateTaskAction({
        id: id,
        title: this.title,
        description: this.description
      });

      this.title = "";
      this.description = "";
      $("#updateTaskModal").modal('toggle')
    }
  },
  watch: {
    task() {
      this.title = this.task.title
      this.description = this.task.description
    }
  }
};
</script>
