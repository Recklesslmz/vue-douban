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
          <div :class="[tabName,{checkStyle:chooseIndex == index}]" @click='chooseItem(index)'
               v-for='(item,index) in menuList'>{{item.name}}
          </div>
        </div>

        <div class="tab-list">
          <div class="tab-list-title">影院热映</div>
          <div class="movieList">
            <div v-for='item in movieList' @click="toMovieDetail(item.id)">
              <img :src="item.images.small">
              <div class="title">{{item.title}}</div>
              <star :averages='item.rating.average' :isShow='isShow' class='star'></star>
            </div>
          </div>
        </div>
      </div>
    </mt-tab-container>
  </div>

</template>

<script type="text/ecmascript-6">
  import {Indicator, Tabbar, TabItem, TabContainer} from 'mint-ui';
  import star from '../components/star/star'
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
        movieList: []
      }
    },
    beforeCreate(){
      Indicator.open();
    },
    mounted(){
      this.getHotMovie()
    },
    methods: {
      chooseItem(index){
        this.chooseIndex = index
        console.log(index)
      },
      getHotMovie(){
        this.$http.get(commonUrl + '/v2/movie/in_theaters?count=10').then(response => {
          Indicator.close()
          this.movieList = response.data.subjects
          console.log(response)
        }, response => {

        })
      },
      toMovieDetail(index){
        this.$router.push({name: 'movieDetail', params: {id: index}})
        console.log(index)
      }
    },
    components: {
      star
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
      }
    }
  }

</style>
