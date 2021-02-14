<template>
  <form @submit.prevent="authMe">
    <div class="main">
      <input type="text" v-model="email" name="email" id="email" autofocus><br>
      <input type="password" v-model="password" name="password" id="password">
      <input type="hidden" name="strategy" value="local">
    </div>
    <button type="submit">login</button>
  </form>
  <br>
  <br>
  <h3>Admin</h3>
  <div>
    <button type="submit" @click="createUser">create user (some@user.com)</button>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'
// import feathers from '@feathersjs/feathers'
// import auth from '@feathersjs/authentication-client'
// import rest from '@feathersjs/rest-client'

// import { ref } from '@vue/composition-api'

// const app = feathers()

// // Available options are listed in the "Options" section
// app.configure(auth({
//   storageKey: 'feathers-jwt'
// }))

// const apiServer = process.env.VUE_APP_API_SERVER
// const restClient = rest(apiServer)

// app.configure(restClient.fetch(window.fetch))

export default {
  name: 'Login',
  data () {
    return {
      info: null,
      email: 'some@email.com',
      password: 'somepassword',
      loading: false,
      loadingGoogle: false
    }
  },
  methods: {
    ...mapActions('auth', ['authenticate', 'logout']),
    authMe () {
      const { email, password } = this
      this.$store
        .dispatch('auth/authenticate', { strategy: 'local', email, password })
        .then(res => this.$router.push({ path: '/results' }))
      // app.get('authentication').then(value => {
      //   console.log('>>> debug 111', value)
      //   console.log('>>> debug app.rest', app.rest)
      //   console.log('>>> debug app.authentication.options', app.authentication.options)
      // })
    },
    createUser () {
      this.$store.dispatch('users/create', { email: 'some@email.com', password: 'somepassword' })
    }
  },
  mounted () {}
}
</script>

<style scoped lang="less">
</style>
