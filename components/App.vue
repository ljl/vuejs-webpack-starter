<template>
  <h1>{{ welcome }}</h1>
</template>

<script>
export default {
  data () {
    return {
      welcome: ''
    }
  },
  created () {
    this.welcome = 'Hello Vue Developer!'
  }
}
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>
