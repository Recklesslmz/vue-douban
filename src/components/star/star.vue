<template>
  <div id='star'>
    <div v-for='item in starFirst'>
      <img class="starChoose" src="http://7xviof.com1.z0.glb.clouddn.com/start_01.png">
    </div>
    <div v-for='item in (5-starFirst)'>
      <img class="starChoose" src="http://7xviof.com1.z0.glb.clouddn.com/star_03.png">
    </div>
    <div v-if='isShow' class="rating">{{averages}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      averages: Number,
      isShow: Boolean
    },
    data(){
      return {
        average: '',
        starFirst: '',
      }
    },
    mounted(){
      this.getCurrentStars()
    },
    methods: {
      getCurrentStars(){
        console.log(this.average)
        this.starFirst = parseInt(this.averages / 2)
      }
    },
  }

</script>
<style lang="scss">
  #star {
    display: flex;
    .starChoose {
      width: .5rem;
    }
    .rating {
      color: #9b9b9b;
      font: {
        size: .6rem;
      }
    ;
      position: relative;
      top: .3rem;
    }
  }
</style>
