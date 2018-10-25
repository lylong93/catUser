<template>
	<div class="entrybutton">
		<div class="steps">
			<span class="circle light"></span>
			<span class="lineone" :class="{'light':step>0}"></span>
			<span class="circle"  :class="{'light':step>0}"></span>
			<span class="lineone" :class="{'light':step===2}"></span>
			<span class="circle"  :class="{'light':step===2}"></span>
			<img src=".././icons/step.png" :class="iconClass">
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	props:['step'],
	data() {
		return {
			styles:['one','tow','three']
		}
	},
	computed:{
		circleClass() {
			// return `icon${this.step}`
		},
		lineClass() {
			// return `icon${this.step}`
		},
		iconClass() {
			let style = this.styles[this.step]
			return `icon${style}`
		}
	}
}
</script>
<style lang="scss" scoped>
	.entrybutton{
		display: flex;
      	align-items:center;
      	justify-content:center;
      	height: 90px;
      	margin: 90px 0;
      	.steps {
      		display: flex;
      		align-items:center;
      		position: relative;
      		.lineone{
      			height: 0;
      			width: 250px;
      			border:1px solid rgb(153,153,153);
      		}
      		.circle {
      			height: 30px;
      			width: 30px;
      			border:1px solid rgb(153,153,153);
      			border-radius: 50%;
      		}
      		.light {
      			background-color: rgb(247,148,28);
      			border:1px solid rgb(247,148,28);
      		}
      		.iconone {
      			width: 55px;
      			height: 55px;
      			position: absolute;
      			top:-60px;
      			left:-10px;
      		}
      		.icontow {
      			width: 55px;
      			height: 55px;
      			position: absolute;
      			top:-60px;
      			left:280px;
      		}
      		.iconthree {
      			width: 55px;
      			height: 55px;
      			position: absolute;
      			top:-60px;
      			right:-10px;
      		}
      	}
	}
</style>