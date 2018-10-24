<template>
	<div class="detailcom">
		<div class="title">评论</div>
		<div v-for="(item,index) in lists" :key="index" class="eve">
			<div class="eve-head">
				<div class="eve-head-left">
					<div class="avat"></div>
					<div class="user">
						<div class="name">罗小黑</div>
						<div class="sign">民以食为天</div>
					</div>
				</div>
				<span class="eve-head-right">
					今天 12:34
				</span>
			</div>
			<div class="eve-main">
				<div  class="content">
					经济的难题单身快乐大家看到的历史上圣诞节敬爱的卡卡基督教的进度加快建设卡啦
				</div>
				<div  class="foodimg">
					<div class="eveimg" v-for="i in item.img" >{{i}}</div>
				</div>
				<div  class="address">上海</div>
			</div>
			<div class="eve-foot">
				<div class="eve-foot-left">
					<div class="text">
						<span>赞</span>
						<span class="number">136</span>
					</div>
					<div  class="text">
						<span>此店留爪</span>
						<span class="number">136</span>
					</div>
					<div  class="text">
						<span>喵友留言</span>
						<span class="number">136</span>
					</div>
				</div>
				<div class="eve-foot-right">
					<span class="every"></span>
					<span class="every"></span>
					<span class="every"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				lists:[{img:[1,3]},{img:[]},3]
			}
		}
	}
</script>
<style lang="scss" scoped>
.detailcom {
	padding:  0 30px 30px 30px;
	.eve {
		padding: 10px 30px;
		height: 430px;
		margin-top: 30px;
		box-sizing:border-box;
		background-color: #fff;
		box-shadow: 0px 0px 10px  rgb(144,144,144);
		.eve-head {
			display: flex;
			justify-content:space-between;
			// border:1px solid red;
			.eve-head-left{
				display: flex;
				.avat{
					height: 100px;
					width: 100px;
					border:1px solid red;
					border-radius: 50%;
				}
				.user {
					margin-left:30px;
					display: flex;
					flex-direction:column;
					justify-content:space-around;
					.name {
						font-size: 30px;
					}
					.sign {
						font-size: 20px;
					}
				}
			}
			.eve-head-right {
				font-size: 20px;
			}
		}
		.eve-main {
			margin: 10px 0;
			// border:1px solid red;
			.content {

			}
			.foodimg {
				display: flex;
				margin: 10px 0;
				height: 110px;
				.eveimg {
					height: 110px;
					width: 110px;
					margin-right: 12px;
					border:1px solid black;
				}
			}
			.address{
				font-size: 20px;
			}
		}
		.eve-foot {
			display: flex;
			justify-content:space-between;
			// border:1px solid red;
			align-items:center;
			.eve-foot-left {
				display: flex;
				.text {
					margin-right: 20px;
					font-size: 20px;
					.number {
						color:rgb(247,148,28)
					}
				}
			}
			.eve-foot-right {
				display: flex;
				.every {
					width: 38px;
					height: 38px;
					margin-left: 20px;
					border:1px solid black;
					border-radius: 50%;
				}
			}
		}
	}
}
</style>