<template>
<div>
  <h1>Register</h1>

  <input type="email" name="email" placeholder="email" v-model="email">
  <br>
  <input type="password" name="password" placeholder="password" v-model="password">
  <br>
  <input type="submit" name="submit" value="Log in" @click="register">
</div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      console.log('Register button was clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
