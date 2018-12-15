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
  created() {
    this.$store.dispatch('user/refurbish')
  },
  components:{
    Footer
  }
}
</script>

<style lang="scss" scoped>
.main {
	height: 100vh;
	display: flex;
	flex-direction:column;
  background-color:rgb(246,2465,245);
}
</style>
