<template>
	<div class="entrybutton" @click="headlClick">
		{{text}}
	</div>
</template>
<script type="text/javascript">
export default {
	props:['text'],
	methods:{
		headlClick() {
			this.$emit('myClick')
		}
	}
}
</script>
<style lang="scss" scoped>
	.entrybutton{
		width: 390px;
      	height: 90px;
      	border-radius: 50px;
      	margin: 90px 0;
      	background-color:rgb(247,148,28);
      	line-height: 90px;
      	text-align: center;
      	color: #fff;
	}
</style>