<template>
	<div class="wrapper">
        <Back/>
        <ChatList/>
        <ChatInput/>
	</div>
</template>
<script>
import Back from '@/commons/Back'
import ChatList from './components/ChatList'
import ChatInput from './components/ChatInput'
export default  {
	data() {
		return{

		}
	},
	components: {
        ChatInput,
        ChatList,
        Back
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