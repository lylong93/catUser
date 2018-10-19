<template>
	<div class="homeweek">
		<h2  class="homeweek-title">本周菜谱</h2>
		<div class="homeweek-img">
			<div class="eve"  v-for="i in footList"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				footList: [1,2,3]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.homeweek {
		padding: 0 30px;
		.homeweek-title {
			font-size: 36px;
			margin: 50px 0;
		}
		.homeweek-img {
			display: flex;
			border:1px solid yellow;
			overflow: scroll;
			.eve{
				flex:none;
				width: 322px;
				height: 159px;
				border:1px solid red;
				margin-right: 30px;
			}
		}

	}
</style>