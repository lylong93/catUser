<template>
	<div  class="shopfoot">
		<div class="shopfoot-head">
			点餐
		</div>
		<div class="shopfoot-main">
			<div class="foodtiem" v-for="(item,index) in foodList" :key="index">
				<div class="foodtiem-left">
					<div class="img"></div>
					<div class="detail">
						<div class="name">风味千层饼</div>
						<div>※</div>
						<div>
							<span class="price">15</span>
							RMB
						</div>
					</div>
				</div>
				<div class="foodtiem-right">
					<div  class="num">月销90笔</div>
					<div  class="contral">contral</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				foodList:[1,2,3,4,5,6]
			}
		}
	}
</script>
<style lang="scss" scoped>
	 .shopfoot{
	 	padding: 100px 0 50px 0;
	 	display: flex;
	 	flex-direction:column;
	 	flex:1;
	 	.shopfoot-head{
	 		height:90px;
	 		text-align: center;
	 		line-height: 90px;
	 		border:1px solid red;
	 	}
	 	.shopfoot-main {
	 		flex:1;
	 		overflow: scroll;
	 		padding:  0 30px;
	 		&::-webkit-scrollbar {
	 		 	width: 0 !important
	 		  }
	 		.foodtiem {
	 			display: flex;
	 			justify-content:space-between;
	 			margin: 20px 0;
	 			height:200px;
	 			background-color: #fff;
	 			box-shadow: 0 5px 5px -1px rgb(144,144,144);
	 			.foodtiem-left {
	 				display: flex;
		 			.img{
		 				height:200px;
		 				width: 228px;
		 				background-color: yellow;
		 			}
		 			.detail {
		 				padding: 30px;
		 				display: flex;
		 				flex-direction:column;
		 				justify-content:space-around;
		 				.name {
		 					font-size: 28px;
		 				}
		 				.price{
		 					font-size: 50px;
		 					color: red;
		 				}
		 			}
	 			}
	 			.foodtiem-right {
	 				display: flex;
	 				flex-direction:column;
	 				justify-content:space-between;
	 				text-align: right;
	 				padding: 30px;
	 				font-size: 20px;
	 				.num {
	 					font-size: 20px;
	 				}
	 				.contral {
	 					width: 160px;
	 					background-color:red;
	 				}
	 			}
	 		}
	 	}
	 }
</style>