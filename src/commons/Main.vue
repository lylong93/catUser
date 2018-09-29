<template>
  <div class="main">
    <router-view/>
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

<style>
</style>
