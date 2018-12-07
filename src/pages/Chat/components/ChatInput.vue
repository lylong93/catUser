<template>
	<div class="chatinput">
        <input type="text" class="input">
        <div class="btn">send</div>
	</div>
</template>
<script>
export default  {
	data() {
		return{

		}
	},
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