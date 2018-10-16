<template>
  <div class="main">
    <router-view />
   	<Footer/>
  </div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'App',
  components:{
    Footer
  }
}
</script>

<style lang="scss" scoped>
.main {
	border:1px solid black;
	height: 100vh;
	display: flex;
	flex-direction:column;
}
</style>
