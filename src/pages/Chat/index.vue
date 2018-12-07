<template>
	<div class="wrapper">
		<div class="main">
			<ChatInput/>
		</div>
	</div>
</template>
<script>

import ChatInput from './components/ChatInput'
export default  {
	data() {
		return{

		}
	},
	components: {
		ChatInput,
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