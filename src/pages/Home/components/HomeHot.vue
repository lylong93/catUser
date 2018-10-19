<template>
	<div class="homehot">
		<h2 class="homehot-title">热门精品</h2>
		<div  name="list" class="homehot-main" @touchstart="start" @touchend="end">
			<span  class="eve"  v-for="(item,index) in list" :key="item" >
				{{item}}
			</span>
			<transition name="list">
				<div v-show="show"  class="active eve">
					{{top}}
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return{
				mark:1,
				list:[1,2,3],
				show:true,
				top:2
			}
		},
		methods:{
			start() {
				this.show = false
			},
			end() {
				console.log('end')
				this.top=3
				this.show = true
			}
		}
	}
</script>
<style lang="scss" scoped>
	.homehot {
		.homehot-title {
			padding: 0 30px;
			font-size: 36px;
			margin: 50px 0;
		}
		.homehot-main{
			display: flex;
			height: 635px;
			position: relative;
			overflow: hidden;
			.eve{
				display: inline-block;
				height:550px;
				width: 50%; 
				border:1px solid black;
				background-color:rgba(0,0,0,.1);
				margin: auto 0;
			}
			.active{
				position: absolute;
				top:0;
				left:50%;
				height:635px;
				width: 500px;
				margin-left: -250px;
				background-color:#fff;
			}
		}
	}
	 .list-leave-active {
	 	transition: all 0.1s;
	}
	.list-enter-active {
 		 transition: all 1s;
	}
	.list-enter {
  		  transform: scale(0.9)  translateX(90px);
	}
	 .list-leave-to{
  		  transform: scale(0.9)  translateX(-90px);

	}
</style>