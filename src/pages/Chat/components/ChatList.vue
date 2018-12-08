<template>
	<div class="chatlist">
        <div class="chatlist-item" v-for="i in list">
            <div class="item-avatar"></div>
            <div class="item-msg"></div>
        </div>
	</div>
</template>
<script>
export default  {
	data() {
		return{
            list:[1,2,3]
		}
	},
}
</script>
<style lang="scss" scoped>
	.chatlist {
       flex:1;
        border:1px solid black;
        overflow:scroll;
        .chatlist-item {
            display: flex;
            .item-avatar {
                border:1px solid blue;
                height: 80px;
                width: 80px;
                border-radius: 50%;
            }
            .item-msg{
                height: 80px;
                width: 30%;
                border:1px solid blue;
                position: relative;
                margin-left:10px;
                &::after{
                    content: '';
                    width: 0px;
                    height: 0px;
                    position:absolute;
                    border: 10px solid transparent;
                    border-right-color:blue;
                    bottom:30px;
                    left:-20px;
                }
            }
        }
	}
</style>