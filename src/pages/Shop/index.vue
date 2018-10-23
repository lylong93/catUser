<template>
	<div class="wrapper">
		<ShopHead/>
		<ShopFood/>
		<ShopFoot/>
	</div>
</template>
<script>
import ShopHead from './components/ShopHead'
import ShopFood from './components/ShopFood'
import ShopFoot from './components/ShopFoot'
export default  {
	data() {
		return{

		}
	},
	components: {
		ShopHead,
		ShopFood,
		ShopFoot
	}
}
</script>
<style lang="scss" scoped>
	.wrapper {
	position: absolute;
	top:0;
	left:0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction:column;
	flex:1;
    background-color:rgb(246,2465,245);
	}
</style>