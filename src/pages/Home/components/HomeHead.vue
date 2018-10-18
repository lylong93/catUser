<template>
	<div class="homehead">
		<div class="homehead-head">
			<div>zuo</div>
			<div>you</div>
		</div>
		<div class="homehead-title">吃货猫</div>
		<div class="homehead-img"></div>
	</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.homehead {
		display: flex;
		flex-direction:column;
		padding:30px;
		background:  linear-gradient(rgba(247,148,28,1) 70% ,rgba(0,0,0,0) 50%);
		.homehead-head {
			display: flex;
		}
		.homehead-title {
			font-size: 60px;
			margin: 50px 0;
			color:#fff;
		}
		.homehead-img{
			height:360px;
			width: 100%;
			border:1px solid black;
			margin: 0 auto;
		}
	}
</style>