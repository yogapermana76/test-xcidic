<template>
  <div
    class="modal fade"
    id="registerModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Register</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="register">
            <div class="form-group">
              <label for="name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" v-model="name" placeholder="Name">
            </div>
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
              >Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'registerAction'
    ]),
    register() {
      this.registerAction({
        name: this.name,
        email: this.email,
        password: this.password
      })

      this.name = ''
      this.email = ''
      this.password = ''
      $('#registerModal').modal('toggle')
    }
  }
}
</script>
