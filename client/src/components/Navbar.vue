<template>
  <div>
    <div class="container-fluid shadow-lg py-2 fixed-top" style="background-color: white">
      <div class="row">
        <div class="col-md-2">
          <h4>
            Test
            <strong>Xcidic</strong>
          </h4>
        </div>
        <div class="col-md-5">
          <button
            class="btn btn-sm text-light shadow"
            style="background-color: #1AC4DC"
            data-toggle="modal"
            data-target="#taskModal"
            v-if="isLogin && role == 'employee'"
          >Add Task</button>
          </div>
        <div class="col-md-5">
          <div class="float-right">
              <button v-if="!isLogin" class="btn border btn-sm mr-2" data-toggle="modal" data-target="#registerModal">
                <i class="fas fa-user-plus"></i> Register
              </button>
              <button v-if="!isLogin" class="btn btn-sm border" data-toggle="modal" data-target="#loginModal">
                <i class="fas fa-sign-in-alt"></i> Login
              </button>
              <span v-if="isLogin" style="margin-right: 5px; font-weight: bold; color: #9B9998; border-right: 1px solid #C8C2C0; padding-right: 5px; margin-right: 10px">
                Hello, {{ getName }}
              </span>
              <span>
                <button v-if="isLogin" @click="logout" class="btn btn-sm border">
                  <i class="fas fa-sign-in-alt"></i> Logout
                </button>
              </span>
          </div>
        </div>
      </div>
    </div>

    <!-- task modal -->
    <TaskModal></TaskModal>
    <!-- end of task modal -->

    <!-- login modal -->
    <LoginModal></LoginModal>
    <!-- end of login modal -->

    <!-- register modal -->
    <RegisterModal></RegisterModal>
    <!-- end of register modal -->
  </div>
</template>

<script>
import RegisterModal from "@/components/RegisterModal.vue";
import LoginModal from "@/components/LoginModal.vue";
import TaskModal from "@/components/TaskModal.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "navbar",
  components: {
    RegisterModal,
    LoginModal,
    TaskModal
  },
  computed: {
    ...mapState(["isLogin", "role"]),
    ...mapGetters(["getName"])
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$store.commit("successLogout");
    }
  }
}
</script>
