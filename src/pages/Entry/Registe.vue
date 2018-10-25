<template>
	<div class="wrapper">
    <Back/>
    <h2>基本信息</h2>
    <EntrySteps :step="TabNum"/>
    <div>
      <div class="tab" v-show="TabNum === 0">
        <EntryInput/>
        <EntryInput/>
        <EntryInput/>
        <EntryInput/>
        <EntryButton text='下一步' @myClick="step"/>
      </div>
      <div class="tab" v-show="TabNum === 1">
        选择喜好
        <div class="likes">
          <span v-for="(item,index) in likes" class="likeItem">{{item}}</span>
        </div>
        <EntryButton text='下一步' @myClick="step"/>
      </div>
      <div class="tab" v-show="TabNum === 2">
        选择头像
        <div class="avats">
          <div v-for="(item,index) in avats" class="avatItem">
          {{item}}
          </div>
        </div>
        <EntryButton text='完成'/>
      </div>
    </div>
	</div>
</template>
<script>
import Back from '@/commons/Back'
import EntryInput from './components/EntryInput'
import EntrySteps from './components/EntrySteps'
import EntryButton from './components/EntryButton'
export default {
  name: 'Login',
  data () {
    return {
      TabNum:0,
      likes:['甜食','清淡','香辣'],
      avats:[1,2,3,4],
      img: require('./icons/di_02.png')
    }
  },
  methods:{
    step() {
     this.TabNum ++
    }
  },
  components:{
		EntryInput,
    EntryButton,
    EntrySteps,
    Back
  }
}
</script>
<style lang="scss" scoped>
  .wrapper{
    height: 100vh;
    background-image:url(./icons/di_02.png);
    background-size:100% 360px;
    background-repeat:no-repeat;
    background-position:bottom;
    padding: 0 30px;
    .tab {
      display: flex;
      flex-direction:column;
      align-items:center;
      .likes{
        display: flex;
        .likeItem{
          width: 150px;
          height: 230px;
        }
      }
      .avats{
        width: 600px;
        display: flex;
        flex-wrap:wrap;
        .avatItem {
          margin: 10px;
          width: 250px;
          height: 161px;
          border:1px solid red;
          border-radius: 8px;
        }
      }
    }
  }
</style>