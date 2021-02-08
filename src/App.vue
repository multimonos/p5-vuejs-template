<template>
  <div class="App">
    <p>application</p>
    <header class="App-header">
      <router-link :to="{ name: 'home'}">home</router-link>
      <router-link :to="{ name: 'sketchlist'}">sketches</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      message: "Learn Vue"
    };
  }
};
</script>

<style>
</style>
