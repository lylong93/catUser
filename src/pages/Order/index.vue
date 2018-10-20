<template>
	<div class="wrapper">
		<div class="head">
			<div class="title">
				<h2 class="title-text">订单</h2>
			</div>
			<div class="tab">
				<span>正在进行中订单</span>
				<span>历史订单</span>
			</div>
		</div>
		<OrderList/>
	</div>
</template>
<script>
import OrderList from './components/OrderList'
export default {
  data () {
    return {
      
    }
  },
  components:{
	OrderList
  }
}
</script>
<style lang="scss" scoped>
	.wrapper{
		flex:1;
		overflow: scroll;
		background-color:rgb(246,2465,245);
		.head {
			.title {
				display: flex;
				height: 100px;
				width: 100%;
				padding: 0 0 0 30px;
				box-sizing:border-box;
				background-color:rgb(247,148,28);
				align-items:flex-end;
				.title-text {
					font-size: 60px;
					color:#fff;
				}
			}
			.tab{
				display:flex;
				justify-content:space-between;
				padding: 60px 80px;
				font-size: 30px;
				color: #333333;
			}
		}
	}
</style>