<template>
	<div class="err">
		{{msg}}
	</div>
</template>
<script>
	export default{
		props:['msg']
	}
</script>
<style lang="scss" scoped>
	.err {
		height: 80px;
		line-height: 80px;
		width: 300px;
		margin: 0 auto;
		color: red;
		text-align: center;
		font-size: 30px;
		font-weight: 700;
		background-color: rgba(155,155,155,.9);
	}
</style>