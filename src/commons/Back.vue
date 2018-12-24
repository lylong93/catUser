<template>
	<div class="back">
		<div class="backhead">
			<span @click="back">返回</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			back() {
				this.$router.back()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back {
		height:80px;
		.backhead {
			width: 80px;
			height: 80px;
			text-align: center;
			line-height: 80px;
		}
	}
</style>