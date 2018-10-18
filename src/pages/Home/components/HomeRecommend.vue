<template>

<div id="list-demo" class="demo">
  <button v-on:click="add">Add</button>
  <button v-on:click="remove">Remove</button>
  <transition-group name="list" tag="div" class="main">
    <span v-for="(item,index) in items" :key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>
</div>
</template>
<script>
	export default {
		 data(){
		 	return{
		 		items: [1,2,3,4,5,6,7,8,9],
    			nextNum: 10
		 	}

  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
  }
	}
</script>
<style lang="scss" scoped>
.main {
	display: flex;
	border:1px solid black;
}
.list-item {
  display: inline-block;
  border:1px solid red;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>