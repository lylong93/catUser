<template>
	<div class="wrapper">
		<div class="main">
			<DetailHead/>
			<DetailDes/>
			<DetailCom/>
		</div>
		<Car/>
	</div>
</template>
<script>
import Car from '@/commons/Car'
import DetailDes from './components/DetailDes'
import DetailHead from './components/DetailHead'
import DetailCom from './components/DetailCom'
export default  {
	data() {
		return{

		}
	},
	components: {
		DetailDes,
		DetailHead,
		DetailCom,
		Car
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
    .main{
    	flex:1;
    	overflow: scroll;
    	}
	}
</style>