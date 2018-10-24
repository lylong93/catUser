<template>
	<div class="shopfoot">
		<div class="icon">
			<i></i>
		</div>
		<div class="price">￥16</div>
		<div class="pay">去结算</div>
	</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.shopfoot {
		display: flex;
		justify-content: space-around;
		align-items:center;
		height: 90px;
		background-color: #fff;
		box-shadow: -10px 0 5px rgb(144,144,144);
		.icon {
			width: 100px;
			height: 100px;
			border:1px solid red;
			position: relative;
			top:-50px;
			background-color: #fff;
		}
		.price{
			font-size: 50px;
			color:red;
		}
		.pay{
			padding: 10px 20px;
			background-color: #ff8212;
			border-radius: 6px;
			color:#fff;
		}
	}
</style>