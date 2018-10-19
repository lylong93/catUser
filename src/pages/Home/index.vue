<template>
	<div class="wrapper">
		<HomeHead/>
		<HomeWeek/>
		<HomeHot/>
    <HomeRecommend/>
	</div>
</template>
<script>
import HomeHead from './components/HomeHead'
import HomeWeek from './components/HomeWeek'
import HomeHot from './components/HomeHot'
import HomeRecommend from './components/HomeRecommend'
export default {
  data () {
    return {
      
    }
  },
  components: {
  	HomeHead,
  	HomeWeek,
  	HomeHot,
    HomeRecommend
  }
}
</script>
<style lang="scss" scoped>
	.wrapper {
		flex:1;
    overflow: scroll;
    background-color:rgb(246,2465,245);
	}
</style>