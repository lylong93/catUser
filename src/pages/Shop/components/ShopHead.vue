<template>
	<div class="shophead">
		<Back/>
		<div class="shophead-main"></div>
	</div>
</template>
<script>
import Back from '@/commons/Back'
export default {
	data() {
		return {

		}
	},
	components: {
		Back,
	}
}
</script>
<style lang="scss" scoped>
	.shophead {
		padding: 0 30px;
		height: 315px;
		background-color: red;
		.shophead-main {
			height: 135px;
			position: relative;
			background-color: #fff;
			bottom: -150px;
			box-shadow: 0 5px 5px -1px rgb(144,144,144);
		}
	}
</style>