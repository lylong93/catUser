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
      <span class="other" @click="goRegiste">立即注册</span>
      <span class="">密码找回</span>
    </div>
    <EntryButton text='开吃' @myClick="login"/>
    <Err :msg="errMsg" v-show="err"/>
	</div>
</template>
<script>
import Err from '@/commons/Err'
import EntryInput from './components/EntryInput'
import EntryButton from './components/EntryButton'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      num:'',
      err:false,
      errMsg:'密码错误',
    }
  },
  methods:{
    ...mapActions([]),
    ok() {
      alert(this.num)
    },
    goRegiste() {
      this.$router.push('/registe')
    },
    login() {
      // this.$router.push('/')
    }
  },
  components:{
		EntryInput,
    EntryButton,
    Err
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