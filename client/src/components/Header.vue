<template>
  <v-toolbar fixed id="bar" class="amber lighten-1">
    <v-toolbar-title>
      <v-btn flat router to="root">
        TabTracker
      </v-btn>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat>BROWSE</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
      <v-btn flat router to="login">
        Login
      </v-btn>

      <v-btn flat router to="register">
        Sign Up
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-if="$store.state.isUserLoggedIn">
      <v-btn flat router @click="logout" to='root'>
        Logout
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bar {
}
</style>
