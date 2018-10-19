<template>
	<div class="homerecommend">
		<div class="homerecommend-head">
			<h2 class="head-title">今日推荐</h2>
			<div class="head-tabs">
				<span v-for="(item,index) in tabs" class="eve" :class="{'light':index===tabItem}" @click="change(index)" :key="index">
					{{item}}
				</span>
			</div>

		</div>
		<div class="homerecommend-main">
			<div v-for="i in lists" class="eve">
				{{i}}
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tabs:['最近','好评','最优'],
				tabItem:0,
				lists: [1,2]
			}
		},
		methods: {
			change(index) {
				this.tabItem = index;
			}
		}
	}
</script>
<style lang="scss" scoped>
.homerecommend {
	padding: 0 30px;
}
.homerecommend-head {
	display: flex;
	justify-content:space-between;
	align-items:center;
	margin: 50px 0;
	.head-title {
		font-size: 36px;
	}
	.head-tabs {
		display: flex;
		.eve {
			margin-left: 50px;
			color:rgb(165,165,165);
		}
		.light {
			color: rgb(247,148,28);
			padding: 0 0 5px 0;
			border-bottom: 3px solid rgb(247,148,28);
		}
	}
}
.homerecommend-main {
	.eve {
		height:197px;
		margin:30px 0;
		background-color: #fff;
		box-shadow: 0 5px 5px -1px rgb(144,144,144);  
	}
}
</style>