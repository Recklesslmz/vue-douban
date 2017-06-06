<template>
  <div id='buy'>
    <div class="title">产品列表</div>
    <products></products>
    <div class="title">购物车列表</div>
    <cart></cart>

    <div class="title">
      总计：5555555777
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import products from '../components/buy/products'
  import cart from '../components/buy/cart'
  export default {
    data(){
      return {}
    },
    methods: {},
    components:{
      products,
      cart
    }
  }

</script>
<style lang="scss">
  #buy {
    .title {
      text-align: center;
      font: {
        size: 1.5rem;
      }
    ;
      margin: {
        top: .5rem;
      }
    ;
    }
    table{
      width: 100%;
      text-align: center;
      line-height:2rem;
      td{
        font:{
          weight: 300;
        };
      }

    }

  }

</style>
