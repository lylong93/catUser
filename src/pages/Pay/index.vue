<template>
	<div class="wrapper">
		<PayHead/>
		<PayMain/>
		<PaySelect/>
	</div>
</template>
<script>
import PayHead from './components/PayHead'
import PayMain from './components/PayMain'
import PaySelect from './components/PaySelect'
export default  {
	data() {
		return{

		}
	},
	components: {
		PayHead,
		PayMain,
		PaySelect
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