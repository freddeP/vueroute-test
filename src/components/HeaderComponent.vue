<template>
  <div>

    <h1>My vue router app</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <hr>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
