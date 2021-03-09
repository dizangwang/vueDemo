<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/foo">跳转到Foo</router-link>
      <br />
      <router-link to="/bar">跳转到Bar</router-link>
      <br />
      <router-link to="/echarts">跳转到图表</router-link>
      <br />
      <router-link to="/map">跳转到地图</router-link>
      <br />
      <router-link to="/project">跳转到增删改查</router-link>
    </p>
    <br />
    <br />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.ajax
      .get("/s?wd=孙悟空")
      .then(function (response) {
        console.log("---请求数据---", response);
      })
      .catch(function (error) {
        // handle error
        console.log("---请求异常---", error);
      });
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
