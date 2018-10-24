<template>
  <div class="wrapper">
    <div class="contral">-</div>
    <div class="number">1</div>
    <div  class="contral">+</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  text-align: center;
  font-size: 30px;
  .contral{
    width:25px;
    height:25px;
    line-height: 25px;
    border: solid 1px #b9b9b9;
  }
  .number {
    margin: 0 50px;
  }
}
</style>