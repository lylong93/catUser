<template>
	<div class="meother">
		<div class="meother-top">
			<div class="eve">
				<i class="icon"></i>
				<span>收货地址</span>
			</div>
			<div class="collect eve">
				<i class="icon"></i>
				<span>我的收藏</span>
			</div>
			<div class="eve">
				<i class="icon"></i>
				<span>我的脚印</span>
			</div>
		</div>
		<div class="meother-mid">
			<div class="mideve top">
				<div class="mideve-left">
					<i class="left-icon"></i>
					<span class="left-text">
						分享有礼
					</span>
				</div>
				<i class="mideve-right"></i>
			</div>
			<div class="mideve">
				<div class="mideve-left">
					<i class="left-icon"></i>
					<span class="left-text">
						商家入驻
					</span>
				</div>
				<i class="mideve-right"></i>
			</div>
		</div>
		<div class="about">
			<div class="about-left">
				<i class="left-icon"></i>
				<span class="left-text">
					关于软件
				</span>
			</div>
			<i class="about-right"></i>
		</div>
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
	.meother {
		padding:0 30px;
		.meother-top {
			display: flex;
			height: 136px;
			justify-content:space-between;
			background-color: #fff;
			box-shadow: 0 5px 5px -1px rgb(144,144,144);
			.eve {
				display: flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
				width: 33.3%;
				.icon {
					display: inline-block;
					width:40px;
					height: 40px;
					background-color: yellow; 
				}

			}
			.collect {
				margin: 30px;
				border-left:1px solid red;
				border-right:1px solid red;
			}
		}
		.meother-mid {
			margin: 20px 0 ;
			background-color: #fff;
			box-shadow: 0 5px 5px -1px rgb(144,144,144);
			.mideve {
				padding: 30px 30px;
				margin: 0 30px;
				display: flex;
				justify-content:space-between;
				align-items:center;
				.mideve-left {
					.left-icon {
						display: inline-block;
						width:30px;
						height: 30px;
						background-color: yellow; 
					}
					.left-text {

					}
				}
				.mideve-right {
					display: inline-block;
					width:30px;
					height: 30px;
					background-color: yellow; 
				}
			}
			.top {
				border-bottom: 1px solid rgb(155,155,155)
			}
		}
		.about {
			background-color: #fff;
			padding: 30px 60px;
			display: flex;
			justify-content:space-between;
			align-items:center;
			box-shadow: 0 5px 5px -1px rgb(144,144,144);
			.about-left {
				.left-icon {
					display: inline-block;
					width:30px;
					height: 30px;
					background-color: yellow; 
				}
				.left-text {

				}
			}
			.about-right {
				display: inline-block;
				width:30px;
				height: 30px;
				background-color: yellow; 
			}
		}
	}
</style>