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
    status: "",
    tasks: []
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
    successAddTask(state, data) {
      state.tasks.push(data)
    },
    findAllTask(state, data) {
      state.tasks = data
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
          const { token, email, name, id, role } = data
          localStorage.setItem('token', token)
          localStorage.setItem('email', email)
          localStorage.setItem('name', name)
          localStorage.setItem('id', id)
          localStorage.setItem('role', role)
          context.commit('successLogin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addTaskAction(context, data) {
      backend
        .post('/tasks', {
          title: data.title,
          description: data.description,
          userId: localStorage.getItem('id')
        })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('findAllTaskAction')
        })
        .catch(err => {
          console.log(err)
        })
    },
    findAllTaskAction(context, data) {
      backend
        .get(`/tasks/${localStorage.getItem('id')}`)
        .then(({ data }) => {
          context.commit('findAllTask', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTaskAction(context, id) {
      backend
        .delete(`/tasks/${id}`)
        .then(() => {
          console.log('success deleted task')
          context.dispatch('findAllTaskAction')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  updateTaskAction(context, id) {
    backend
      .put(`/tasks/${id}`)
      .then(() => {
        console.log('success updated task')
      })
      .catch(err => {
        console.log(err)
      })
  }
})
