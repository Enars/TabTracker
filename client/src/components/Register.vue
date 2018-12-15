<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs4 offset-xs4>
        <div class="white elevation-2">
          <v-toolbar flat dense class="amber lighten-1">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              v-model="email"
              autocomplete="off"
              label="Email">
            </v-text-field>
            <v-text-field
              v-model="password"
              :type="'password'"
              label="Password"
              autocomplete="new-password"
            ></v-text-field>
            <br>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn @click="register">Register</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error {
  color: red;
}

</style>
