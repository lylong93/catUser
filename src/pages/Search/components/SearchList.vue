<template>
	<div class="searchhead">
		<div class="tabs">
			<span>距离最近</span>
			<span>最优选择</span>
			<span>综合排序</span>
		</div>
		<div class="lists">
			<div v-for="i in list" class="item">
				{{i}}
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list:[1,2,3,5]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.searchhead {
		display: flex;
		flex-direction:column;
		.tabs{
			padding: 0 30px;
			line-height: 90px;
			display: flex;
			justify-content:space-between;
			height: 90px;
		}
		.lists{
			flex:1;
			overflow: scroll;
			padding:30px;
			.item{
				height: 300px;
				border:1px solid red;
			}
		}
		
	}

</style>