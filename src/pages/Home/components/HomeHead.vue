<template>
	<div class="homehead">
		<div class="homehead-head">
			<div>zuo</div>
			<div>you</div>
		</div>
		<div class="homehead-title">吃货猫</div>
		<img class="homehead-img" src=".././icons/home.png"/>
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
			margin: 0 auto;
			background-color: rgba(0,0,0,.6);
			position: relative;
			border-radius: 5px;
			&:after{
				content: '';
				width:95%;
				height: 10px;
				border-bottom-left-radius:10px;
				border-bottom-right-radius:10px;
				background-color: rgb(180,180,180);
				position: absolute;
				bottom:-10px;
				left:2.5%;
			}
		}
	}
</style>