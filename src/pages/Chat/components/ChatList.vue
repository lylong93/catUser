<template>
	<div class="chatlist">
        <div class="chatlist-item"  v-for="i in list" :class={right:i.flag}>
            <div class="item-avatar" v-show="!i.flag"></div>
            <div class="item-msg" :class="[i.flag?rightClass:leftClass]">
                {{i.msg}}
            </div>
            <div class="item-avatar" v-show="i.flag"></div>
        </div>
	</div>
</template>
<script>
export default  {
	data() {
		return{
            list:[{flag:true,msg:'我手动挡和建行手机号集合计划,我手动挡和建行手机号集合计划'},{flag:false,msg:'我手动挡和建行手'},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true},{flag:false},{flag:true}],
            rightClass: 'msgright',
            leftClass: 'msgleft',
		}
	},
}
</script>
<style lang="scss" scoped>
	.chatlist {
       flex:1;
        overflow:scroll;
        background-color:#D9ECFE;
        .chatlist-item {
            display: flex;
            margin: 50px 0;
            .item-avatar {
                border:1px solid red;
                height: 80px;
                width: 80px;
                border-radius: 50%;
            }
            .item-msg{
                min-height: 80px;
                max-width: 60%;
                border:1px solid rgb(135,135,135);
                position: relative;
                &::after{
                    content: '';
                    width: 0px;
                    height: 0px;
                    position:absolute;
                    border: 10px solid transparent;
                    top:30px;
                }
            }
            .msgleft {
                margin-left:10px;
                background-color: #fff;
                 &::after{
                    border-right-color:red;
                    left:-20px;
                }
            }
            .msgright{
                 margin-right:10px;
                 background-color: rgba(247,148,28,1);
                 &::after{
               
                    border-left-color:red;
                    right:-20px;
                }
            }
        }
        .right{
            justify-content: flex-end;
        }
	}
</style>