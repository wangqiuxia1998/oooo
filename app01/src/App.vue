<template>
  <div id="app" :style="{height:height}">
    <!--占位符-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
  	return {
  		height:document.documentElement.clientHeight+"px"
  	}
  }
}
</script>

<style>
*{
	margin:0px;
	padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  background-color: pink;
}
</style>
