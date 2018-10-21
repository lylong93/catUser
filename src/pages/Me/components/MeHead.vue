<template>
	<div class="mehead">
		<h2 class="mehead-title">我的</h2>
		<div class="mehead-user">
			<div class="avat"></div>
			<span class="name">罗小黑</span>
		</div>
		<div  class="mehead-foot">
			<div>钱包</div>
			<div>礼品</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		} 
	}
</script>
<style lang="scss" scoped>
	.mehead {
		padding: 30px;
		background:  linear-gradient(rgb(247,148,28) 85% ,rgba(0,0,0,0) 10%);
		.mehead-title {
			color:#fff;
		}
		.mehead-user{
			width: 130px;
			margin: 75px auto 30px auto;
			.avat {
				width: 130px;
				height: 130px;
				border:1px solid black;
				border-radius: 50%;
			}
			.name {
				display: inline-block;
				width: 130px;
				text-align: center;
			}
		}
		.mehead-foot{
			height:190px;
			margin: 0 auto;
			background-color: #fff;
			box-shadow: 0 5px 5px -1px rgb(144,144,144);
		}
	}
</style>