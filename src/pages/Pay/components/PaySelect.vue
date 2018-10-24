<template>
	<div class="payselect">
		<div class="every">
			<span>收货地址</span>
			<div>
				<span></span>
				<span>></span>
			</div>
		</div>
		<div class="every">
			<span>时间</span>
			<div>
				<span></span>
				<span>></span>
			</div>
		</div>
		<div class="every">
			<span>备注</span>
			<div>
				<span></span>
				<span>></span>
			</div>
		</div>

		<div class="goPay">前去支付</div>
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
.payselect {
	padding: 30px;
	.every{
		display: flex;
		justify-content:space-between;
		height: 90px;
	}
	.goPay{
		height: 88px;
		background-color:rgb(247,148,28);
		color:#fff;
		text-align: center;
		line-height: 88px;
		font-size: 40px;
	}
}

</style>