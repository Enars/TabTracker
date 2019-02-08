<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs4 offset-xs4>
        <panel title="Login">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            :type="'password'"
            label="Password"
            v-model="password"
          ></v-text-field>
          <v-alert
              v-if="error"
              v-html="error"
              :value="true"
              color="error"
              outline
          ></v-alert>
          <v-btn @click="login">Login</v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error {
  background-color: lightcoral;
}

</style>
