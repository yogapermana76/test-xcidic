<template>
  <div
    class="modal fade"
    id="loginModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email" class="col-form-label">Email:</label>
              <input type="text" class="form-control" v-model="email" placeholder="Email">
            </div>
            <div class="form-group">
              <label for="Password" class="col-form-label">Password:</label>
              <input type="password" class="form-control" v-model="password" placeholder="Password">
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
              >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    if (localStorage.getItem("token")) {
      this.$store.commit("successLogin");
    }
  },
  methods: {
    ...mapActions(["loginAction"]),
    login() {
      this.loginAction({
        email: this.email,
        password: this.password
      });

      this.email = "";
      this.password = "";
      $("#loginModal").modal("toggle");
    }
  }
}
</script>
