<template>
  <div>
    <h1>sketches</h1>
    <router-link to="/sketches/foo">foo</router-link>

    <div>
      {{$route.params.id}}

    </div>
  </div>
</template>

<script>
export default {
  name: "SketchList"
}
</script>

<style scoped>

</style>