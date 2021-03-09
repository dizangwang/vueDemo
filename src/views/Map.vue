<template>
  <div class="hello">
    <div
      id="container"
      style="width: 1000px; height: 1000px; margin: 0 auto"
    ></div>
  </div>
</template>

<script>
/*global AMap:true*/
export default {
  name: "Map",
  mounted() {
    new AMap.Map("container");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
