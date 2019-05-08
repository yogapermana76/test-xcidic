import Vue from 'vue'
import Vuex from 'vuex'
import backend from './api/backend'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    email: '',
    password: '',
    isLogin: false
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
    },
    successLogout(state, data) {
      state.isLogin = false
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
          const { token, email, name, id } = data
          localStorage.setItem('token', token)
          localStorage.setItem('email', email)
          localStorage.setItem('name', name)
          localStorage.setItem('id', id)
          context.commit('successLogin')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
