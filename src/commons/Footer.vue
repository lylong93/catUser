<template>
	<div class="wrapper">
		<span class="eve">1</span>
		<span class="eve">2</span>
		<span class="eve">3</span>
		<span class="eve">4</span>
	</div>
</template>
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