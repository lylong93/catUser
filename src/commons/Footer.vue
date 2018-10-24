<template>
	<div class="wrapper">
		<span class="eve" @click="$router.push('/home')">home</span>
		<span class="eve" @click="$router.push('/search')">search</span>
		<span class="eve" @click="$router.push('/me')">me</span>
	</div>
</template>
<script>
	export default {
		methods:{
		}
	}
</script>
<style  lang="scss" scoped>
	.wrapper {
		height: 90px;
		border:1px solid red;
		display: flex;
		justify-content: space-around;
		.eve {
			width: 100%;
			border:1px solid yellow;
		}
	}
</style>