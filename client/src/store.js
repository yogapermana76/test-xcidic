import Vue from 'vue'
import Vuex from 'vuex'
import backend from './api/backend'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    email: '',
    password: '',
    isLogin: false,
    role: "",
    title: "",
    description: "",
    date: "",
    tasks: [],
    task: {},
    allTask: [],
  },
  getters: {
    getName(state) {
      return state.name
    }
  },
  mutations: {
    successRegister(state, data) {
      state.name = data.name
      state.email = data.email
      state.password = data.password
    },
    successLogin(state, data) {
      state.isLogin = true
      state.name = localStorage.getItem('name')
      state.role = localStorage.getItem('role')
    },
    successLogout(state, data) {
      state.isLogin = false
    },
    findAllTask(state, data) {
      state.tasks = data
    },
    findOneTask(state, data) {
      state.task = data
    },
    getAllTask(state, data) {
      state.allTask = data
    }
  },
  actions: {
    registerAction(context, data) {
      backend
        .post('users/register/employee', {
          name: data.name,
          email: data.email,
          password: data.password
        })
        .then(({ data }) => {
          console.log(data)
          swal("Success Register!", "You clicked the button!", "success");
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginAction(context, data) {
      backend
        .post('/users/login', {
          email: data.email,
          password: data.password
        })
        .then(({ data }) => {
          swal("Success Login!", "You clicked the button!", "success");
          const { token, email, name, id, role } = data
          localStorage.setItem('token', token)
          localStorage.setItem('email', email)
          localStorage.setItem('name', name)
          localStorage.setItem('id', id)
          localStorage.setItem('role', role)
          context.commit('successLogin')
          context.dispatch('findAllTaskAction')
          context.dispatch('getAllTaskAction')
        })
        .catch(err => {
          console.log(err)
          swal("email / password is wrong!", "You clicked the button!", "warning");
        })
    },
    addTaskAction(context, data) {
      backend
        .post('/tasks', {
          title: data.title,
          description: data.description,
          userId: localStorage.getItem('id')
        }, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          swal("Success Add Task!", "You clicked the button!", "success");
          context.dispatch('findAllTaskAction')
        })
        .catch(err => {
          console.log(err)
        })
    },
    findAllTaskAction(context, data) {
      backend
        .get(`/tasks/${localStorage.getItem('id')}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          context.commit('findAllTask', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTaskAction(context, id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this task!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          backend
            .delete(`/tasks/${id}`, {
              headers: {
                token: localStorage.getItem('token')
              }
            })
            .then(() => {
              console.log('success deleted task')
              swal("Poof! Your task has been deleted!", {
                icon: "success",
              })
              context.dispatch('findAllTaskAction')
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          swal("Your task is safe!");
        }
      })
    },
    updateTaskAction(context, data) {
      backend
        .put(`/tasks/${data.id}`, {
          title: data.title,
          description: data.description
        }, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(() => {
          console.log('success updated task')
          swal("Success Update Task!", "You clicked the button!", "success");
          context.dispatch('findAllTaskAction')
        })
        .catch(err => {
          console.log(err)
        })
    },
    findOneTaskAction(context, id) {
      backend
        .get(`/tasks/edit/${id}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          context.commit('findOneTask', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllTaskAction(context) {
      backend
        .get('/tasks', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
        .then(({ data }) => {
          context.commit('getAllTask', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
