<template>
	<div class="wrapper">
	  	<MeHead/>
	  	<MeOther/>
	</div>
</template>
<script>
import MeHead from './components/MeHead'
import MeOther from './components/MeOther'
export default {
  data () {
    return {
      
    }
  },
  components:{
  	MeHead,
  	MeOther
  }
}
</script>
<style lang="scss" scoped>
	.wrapper {
		flex:1;
		background-color:rgb(246,2465,245);
	}
</style>