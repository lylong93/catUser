<template>
	<div class="wrapper">
		<SearchHead/>
		<SearchList/>
	</div>
</template>
<script>
import SearchHead from './components/SearchHead'
import SearchList from './components/SearchList'
export default {
  data () {
    return {
      
    }
  },
  components:{
  	SearchHead,
  	SearchList
  }
}
</script>
<style lang="scss" scoped>
	.wrapper {
		flex:1;
	    background-color:rgb(246,2465,245);
	    display: flex;
	    flex-direction:column;
	}
</style>