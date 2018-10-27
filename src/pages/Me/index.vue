<template>
	<div class="wrapper">
	  	<MeHead :name="user"/>
	  	<MeOther/>
	</div>
</template>
<script>
import MeHead from './components/MeHead'
import MeOther from './components/MeOther'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed:{
  	  ...mapState({
  	  	user: state => state.user,
  	})
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