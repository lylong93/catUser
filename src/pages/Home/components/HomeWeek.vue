<template>
	<div class="homeweek">
		<h2  class="homeweek-title">本周菜谱</h2>
		<div class="homeweek-img">
			<img class="eve"  v-for="i in footList" :src="i" />
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				footList: [require('../icons/week_03.png'),
						   require('../icons/week_05.png'),
						   require('../icons/week_03.png')
				]
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
			overflow: scroll;
			.eve{
				flex:none;
				width: 322px;
				height: 159px;
				margin-right: 30px;
			}
		}

	}
</style>