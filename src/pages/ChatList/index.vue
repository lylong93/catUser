<template>
	<div class="wrapper">
        <Back/>
        <div class="ov">
            <div v-for="i in list" class="chateve" @click="goChat">
                <div class="avatar"></div>
                <div class="main">
                    <div class="name">丽水</div>
                    <div class="msg">我说的就是考试收费我说的就是考试收费我说的就是考试收费我说的就是考试收费</div>
                </div>
                <div class="time">19:00</div>
            </div>
        </div>
	</div>
</template>
<script>
import Back from '@/commons/Back'

export default  {
	data() {
		return{
            list:[1,2,3],
		}
    },
    methods:{
        goChat() {
            this.$router.push('/chat')
        }
    },
    components:{
        Back,
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
        flex:1;
        display:flex;
        flex-direction: column;
       background-color:rgb(246,2465,245);
       .ov {
           flex:1;
           overflow:scroll;
       }
        .chateve{

            border:1px solid red;
            height: 120px;
            margin:20px 0;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
            background-color:#fff;
            .avatar {
                flex-shrink:0;
                width:100px;
                height: 100px;
                border:1px solid yellow;
            }
            .main{
                flex:1;
                border:1px solid black;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin:0 30px;
                .msg{
                    width:300px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            .time{
                width:100px;
            }
        }
	}
</style>