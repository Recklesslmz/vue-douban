<template>
  <div id='home'>
    <mt-tabbar class='tab' v-model="selected">
      <mt-tab-item id="index">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        首页
      </mt-tab-item>
      <mt-tab-item id="movie">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        书影音
      </mt-tab-item>
      <mt-tab-item id="broadcast">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        广播
      </mt-tab-item>
      <mt-tab-item id="myself">
        <!--<img slot="icon" src="../assets/100x100.png">-->
        我的
      </mt-tab-item>
    </mt-tabbar>
    <mt-tab-container v-model="selected">
      <div class="tab-main" v-show="selected == 'movie'">
        <div class="tab-menu">
          <div :class="[tabName,{checkStyle:chooseIndex == index}]" @click='chooseItem(index,item.type)'
               v-for='(item,index) in menuList'>{{item.name}}
          </div>
        </div>
        <router-view></router-view>
      </div>
      <div class="self" v-show="selected == 'myself'">
        <self></self>
      </div>
    </mt-tab-container>
  </div>
</template>
<script type="text/ecmascript-6">
  import self from '../page/self'
  export default {
    data(){
      return {
        selected: 'movie',
        chooseIndex: '',
        tabName: 'tabName',
        menuList: [{name: '电影', type: 1}, {name: '读书', type: 2}, {name: '电视', type: 3}, {
          name: '同城',
          type: 4
        }, {name: '音乐', type: 5}],
        isShow: true,
      }
    },
    methods: {
      chooseItem(index, type){
        this.chooseIndex = index
        console.log(type)
        switch (type) {
          case 1:
            this.$router.push({path: '/home'})
            break
          case 2:
            this.$router.push({path: '/home/book'})
            break
          case 3:
            this.$router.push({path: '/home/television'})
            break
          case 4:
            this.$router.push({path: '/home/city'})
            break
          case 5:
            this.$router.push({path: '/home/music'})
            break
        }
      },
    },
    components: {
      self
    }
  }
</script>
<style lang="scss">
  @import "../sass/common";

  #home {
    background: #f7f7f7;
    .tab {
      .is-selected {
        color: $base-color;
      }
      height: 2.7rem;
      .mint-tab-item-label {
        line-height: 1.7rem;
      }
    }
    .tab-main {
      width: 100%;
      .tab-menu {
        text-align: center;
        display: flex;
        width: 100%;
        height: 2.5rem;
        color: #9b9b9b;
        background: #fff;
        border: {
          bottom: 1px solid #f5f5f5;
        }
      ;
        .tabName {
          font: {
            weight: 400;
          }
        ;
          flex: 1;
          line-height: 2.5rem;
        }
        .checkStyle {
          color: $base-color;
          border: {
            bottom: 2px solid $base-color;
          }
        ;
        }
      }
      .tab-list {
        background: #fff;
        margin: {
          top: .5rem;
        }
      ;
        .not_show {
          font: {
            size: .6rem;
            weight: 300;
          }
        ;
          color: #9b9b9b;
          position: relative;
          top: .3rem;
          right: .3rem;
        }
        .more {
          float: right;
          position: relative;
          top: -1rem;
          right: 1rem;
          color: $base-color;
          font: {
            weight: 300;
          }
        ;
        }
        .tab-list-title {
          font: {
            size: 1.1rem;
          }
        ;
          padding: {
            top: 1.5rem;
            left: .5rem;
          }
        ;
        }
        .movieList {
          display: flex;
          overflow: auto;
          margin: {
            top: 1rem;
          }
        ;
          div {
            margin: {
              left: .2rem;
            }
          ;
            text-align: center;
            img {

            }
          }
          .title {
            width: 4rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            left: -.2rem;
            margin: {
              top: .3rem;
            }
          ;
            font: {
              size: .6rem;
            }
          ;
          }
        }
        .movieList::-webkit-scrollbar {
          display: none
        }
        .rankList::-webkit-scrollbar {
          display: none
        }
        .rankList {
          display: -webkit-box;
          overflow-x: scroll;
          margin: {
            top: 1rem;
          }
        ;
          .topOne {
            margin: {
              left: .2rem;
            }
          ;
            width: 7.5rem;
            height: 7.5rem;
            color: #fff;
            border: {
              radius: .3rem
            }
          ;
            text-align: center;
            background: linear-gradient(#dca426, #f6ebcc);
            .topOneTitle_f {
              font: {
                size: 1rem
              }
            ;
              padding: {
                top: 1rem;
              }
            ;
            }
            .topOneTitle_s {
              font: {
                size: .7rem;
                weight: 300
              }
            ;
              padding: {
                top: 1rem;
              }
            ;
            }
          }
          .topTwo {
            @extend .topOne;
            background: linear-gradient(#4dc064, #d1f0dc);
          }
          .topThree {
            @extend .topOne;
            background: linear-gradient(#9e65c3, #e6dbf1);
          }
          .topFour {
            @extend .topOne;
            background: linear-gradient(#df6d8a, #f7dbe2);
          }
        }

      }
    }

    .self {
      width: 100%;
    }
  }

</style>
