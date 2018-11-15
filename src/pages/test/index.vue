<template>
	<div class="wrapper">
    <div class="ok">
      <div  class="one">
        <div v-for="i in one" class="eve">
        {{i}}
      </div>
      </div>
      <div  class="tow">
        <div v-for="i in tow" class="eve">
        {{i}}
      </div>
      </div>

    </div>
	</div>
</template>
<script>

export default {
  data () {
    return {
      one:[1,2,3,4,5,6,7],
      tow:[1]
    }
  },

}
</script>
<style lang="scss" scoped>
	.wrapper {
		flex:1;
		background-color:rgb(246,2465,245);
    .ok {
      display: flex;
      .one{
        width: 50%;
        background-color: red;
      }
      .tow{
        width: 50%;
         background-color: yellow;
      }
      .eve{
        border:1px solid black;
      }
    }
	}
</style>