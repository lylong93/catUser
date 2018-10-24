<template>
	<div class="payhead">
		<Back/>
		<h2>订单确认</h2>
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
			Back
		}
	}
</script>
<style lang="scss" scoped>
	.payhead{
		padding: 0 30px;
		background-color:rgb(247,148,28);
		h2 {
			font-size: 60px;
			color:#fff;
		}
	}
</style>