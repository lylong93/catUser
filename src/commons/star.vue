<template>
	<div class="wrapper">
		<span v-for="(i,k) in 5" :key="k">&#x2605;</span>
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
	.wrapper {
		color: yellow;
	}
</style>