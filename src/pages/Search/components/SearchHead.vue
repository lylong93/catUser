<template>
	<div class="searchhead">
		<div class="tip" @click="goChatList">msg</div>
		<div class="input">
			搜索商家，商品名称
		</div>
		<div class="tip">
			<div class="icon"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods:{
			goChatList() {
				this.$router.push('/chatlist')
			}
		}
	}
</script>
<style lang="scss" scoped>
	.searchhead {
		height: 200px;
		background-color: rgb(247,148,28);
		display: flex;
		justify-content:space-around;
		align-items: center;
		.input{
			height: 90px;
			width:60%;
			color:#999;
			line-height: 90px;
			text-align: center;
			background-color: #fff;
			border:1px solid red;
		}
		.tip {
			height: 100%;
			width: 10%;
			text-align: center;
			display: flex;
			align-items: center;
			.icon{
				width: 90px;
				height: 90px;
				border:1px solid black;
			}
		}
	}

</style>