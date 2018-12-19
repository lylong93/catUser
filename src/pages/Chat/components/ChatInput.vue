<template>
	<div class="chatinput">
        <input type="text" class="input" v-model="msg">
        <div class="btn" @click="btnHeadler">send</div>
	</div>
</template>
<script>
import { ioSendMsg } from '@/socket';
export default  {
	data() {
		return{
            msg:''
		}
    },
    methods:{
        btnHeadler() {
            let newMsg = {from: '哈哈哈', to: 'lyl',msg:this.msg}
            this.$emit('send',newMsg)
        }
    }
}
</script>
<style lang="scss" scoped>
	.chatinput {
        height: 100px;
        border:1px solid red;
        display: flex;
        .input{
            width: 80%;
        }
        .btn {
            width: 20%;
            background-color: red;
        }
	}
</style>