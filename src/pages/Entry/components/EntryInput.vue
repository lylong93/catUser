<template>
	<div class="entryinput">
		<slot name="icon" class="icon"/>
		<input type="text" class="input"
		:value="value"
      	@input="$emit('input', $event.target.value)">
		<span @click="clean">&#x2718;</span>
		<img src=".././icons/show.png" class="icon" @click="dshow">
	</div>
</template>
<script type="text/javascript">
export default {
	props:['value'],
	data() {
		return {
			ovalue:this.value
		}
	},
	methods:{
		clean() {
			console.log(this.value)
			// this.value = ''
		},
		dshow() {
			this.value = ''
		}
	}
}
</script>
<style lang="scss" scoped>
	.entryinput{
		width: 90%;
		padding: 0 30px;
		margin: 15px 0;
		display: flex;
		justify-content:space-between;
		align-items:center;
		height: 88px;
		border:1px solid #999;
		border-radius: 44px;
		.icon{
			width: 52px;
			height: 30px;
		}
		.input{
			padding:10px;
			border:none;
			&:focus{
				border:0;
			}
		}
	}
</style>