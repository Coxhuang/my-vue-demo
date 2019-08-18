<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: inherit; /* app里面的文本对其方式 */
	color: #2c3e50;
	margin-top: 0; /* app里面的文本到本标签的内间距 */
	width:100%;
	height: 100%;
	display: block;
}
</style>
