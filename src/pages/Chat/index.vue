<template>
	<div class="wrapper">
        <Back/>
        <ChatList :list="list"/>
        <ChatInput  @send="send"/>
	</div>
</template>
<script>
import Back from '@/commons/Back'
import ChatList from './components/ChatList'
import ChatInput from './components/ChatInput'
import {ioSendMsg,ioRecMsg} from '@/socket'
export default  {
	data() {
		return{
			list:[{flag:true,msg:'我手动挡和建行手机号集合计划,我手动挡和建行手机号集合计划'},{flag:false,msg:'我手动挡和建行手'}],
		}
	},
	created() {
        ioRecMsg()
    },
	methods:{
		send(ok) {
			// alert('ok')
			// alert(ok)
			this.list.push(ok)
		},
		
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