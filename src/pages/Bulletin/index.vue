<template>
	<div class="wrapper">
		<div class="head">
			<span class="title-text">爪迹</span>
		</div>
		<BulletinList/>
	</div>

</template>
<script>
import BulletinList from './components/BulletinList'
export default {
  data () {
    return {
      
    }
  },
  components:{
  	BulletinList
  }
}
</script>
<style lang="scss" scoped>
	.wrapper {
		flex:1;
	    overflow: scroll;
	    background-color:rgb(246,2465,245);
		.head {
			display: flex;
			height: 100px;
			width: 100%;
			padding: 0 0 0 30px;
			box-sizing:border-box;
			background-color:rgb(247,148,28);
			align-items:flex-end;
			.title-text {
				font-size: 60px;
				color:#fff;
			}
		}
	}
</style>