<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        首页
      </mt-tab-item>
      <mt-tab-item id="书影音">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        书影音
      </mt-tab-item>
      <mt-tab-item id="广播">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        广播
      </mt-tab-item>
      <mt-tab-item id="我的">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>

<script type="text/ecmascript-6">
  import {Tabbar, TabItem} from 'mint-ui';
  export default {
    data(){
      return{
        selected:'首页'
      }
    }
  }

</script>
<style lang="scss">

</style>
