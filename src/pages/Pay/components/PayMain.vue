<template>
	<div class="paymain">
		<div class="paymain-main">
			<div class="foodlist">
				<div v-for="i in list"  class="fooditem">
					<div class="img">
				
					</div>
					<div class="detail">
						<div class="name">风味千层饼</div>
						<div>
							<span class="price">15.00</span>&nbsp;RMB
						</div>
					</div>
				</div>
			</div>
			<div class="count">
				<span>支付总计</span>
				<div>
					<div class="every">
						<span>餐费总价</span>
						<span>33.00RMB</span>
					</div>
					<div  class="every">
						<span>配送费用</span>
						<span>5.00RMB</span>
					</div>
				</div>
			</div>
			<div class="total">
				<span class="text">30.00</span>&nbsp;RMB
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list:[1,2,3]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.paymain{
		padding: 30px;
		background:  linear-gradient(rgb(247,148,28) 30% ,#fff 10%);
		.paymain-main {
			padding:  30px;
			height: 630px;
			background-color:#fff;
			box-shadow: 0 5px 5px -1px rgb(144,144,144); 
			display: flex;
			flex-direction:column;
			.foodlist {
				height: 500px;
				overflow:scroll;
				.fooditem{
					height: 170px;
					margin: 10px 0;
					display: flex;
					justify-content:space-between;
					.img{
						width: 192px;
						height: 170px;
						background-color: yellow; 
					}
					.detail {
		 				padding: 30px;
		 				display: flex;
		 				flex-direction:column;
		 				justify-content:space-around;
		 				font-size: 20px;
		 				.name {
		 					font-size: 28px;
		 				}
		 				.price{
		 					font-size: 50px;
		 					color: red;
		 				}
		 			}
				}
			}
			.count{
				display: flex;
				justify-content:space-between;
				align-items:center;
				height: 135px;
				font-size: 36px;
				.every{
					width: 300px;
					display: flex;
					justify-content:space-between;
					font-size: 24px;
					line-height: 50px;
				}
			}
			.total{
				display: flex;
				font-size: 20px;
				align-items:flex-end;
				justify-content:flex-end;
				.text{
					font-size: 60px;
					color:red;
					box-sizing:content-box;
					line-height: 55px;
				}
			}
		}
	}
</style>