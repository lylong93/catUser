<template>
	<div class="detaildes">
		<div class="detaildes-head">
			<div class="left">
				<div>千层饼</div>
				<Star/>
				<div>10.00RMB</div>
			</div>
			<NumberContral/>
		</div>
		<div class="detaildes-des">
			香脆爽口，回味无穷
			天然食材，精心烹饪，每一口都是浓香
		</div>
	</div>
</template>

<script>
import NumberContral from '@/commons/NumberContral'
import Star from '@/commons/Star'
export default {
	data() {
		return {}
	},
	components:{
		NumberContral,
		Star
	}
}
</script>
<style lang="scss" scoped>
	.detaildes {
		.detaildes-head {
			padding: 0 30px;
			height: 160px;
			display: flex;
			justify-content:space-between;
			align-items:flex-end;
			background-color: #fff;
			.left{
				display: flex;
				flex-direction:column;
				justify-content:space-between;
			}
		}
		.detaildes-des{
			padding: 0 30px;
			height: 160px;
			display: flex;
			align-items:center;
			justify-content: center;
			background-color: #fff;
		}
	}
</style>