<template>
	<div class="wrapper">
    <img src="./icons/login.png" class="img" @click="ok"/>
		<EntryInput v-model="num">
        <img src="./icons/num.png" slot="icon" style="width: 37px; height: 30px"/>
    </EntryInput>
    <EntryInput>
        <img src="./icons/pwd.png" slot="icon" style="width: 37px; height: 30px"/>
    </EntryInput>
    <div class="mid">
      <span class="other">立即注册</span>
      <span class="">密码找回</span>
    </div>
    <EntryButton text='开吃'/>
	</div>
</template>
<script>
import EntryInput from './components/EntryInput'
import EntryButton from './components/EntryButton'
export default {
  name: 'Login',
  data () {
    return {
      num:''
    }
  },
  methods:{
    ok() {
      alert(this.num)
    }
  },
  components:{
		EntryInput,
    EntryButton
  }
}
</script>
<style lang="scss" scoped>
  .wrapper{
    padding:90px 30px;
    display: flex;
    flex-direction:column;
    align-items:center;
    .img {
      width: 200px;
      height: 200px;
      margin: 50px 0;
    }
    .mid {
      margin: 50px 0 0 0;
      display: flex;
      width: 100%;
      font-size: 24px;
      justify-content:space-between;
      .other{
      color: #529ffe;
      }
    }
  }
</style>