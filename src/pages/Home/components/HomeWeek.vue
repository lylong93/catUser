<template>
	<div class="homeweek">
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
		.homeweek-img {
			display: flex;
			border:1px solid yellow;
			overflow: scroll;
			.eve{
				flex:none;
				width: 322px;
				height: 159px;
				border:1px solid red;
				margin: 0 30px;
			}
		}

	}
</style>