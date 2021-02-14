import { createStore } from 'vuex'

import feathers, { BaseModel, makeServicePlugin } from './feathers-client'
import auth from './store.auth'

/* eslint-disable no-useless-constructor */
class AppAddress extends BaseModel {
  constructor (data, options) { super(data, options) }
  static modelName = 'address'
}
// service('users'),
class Users extends BaseModel {
  constructor (data, options) { super(data, options) }
  static modelName = 'users'
}

export default createStore({
  state: { code: '' },
  mutations: {
    setCode (state, newValue) {
      state.code = newValue
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCode: (state) => {
      return state.code
    }
  },
  plugins: [
    makeServicePlugin({
      Model: AppAddress,
      service: feathers.service(AppAddress.modelName),
      servicePath: AppAddress.modelName
    }),
    makeServicePlugin({
      Model: Users,
      service: feathers.service(Users.modelName),
      servicePath: Users.modelName
    }),
    auth
  ]
})
