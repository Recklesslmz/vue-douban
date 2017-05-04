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

        <div class="tab-list" v-show='movieList.length > 0'>
          <div class="tab-list-title">影院热映</div>
          <div class="more">更多></div>
          <div class="movieList">
            <div v-for='item in movieList' @click="toMovieDetail(item.id)">
              <img :src="item.images.small">
              <div class="title">{{item.title}}</div>
              <star :averages='item.rating.average' :isShow='isShow' class='star'></star>
            </div>
          </div>
        </div>

        <div class="tab-list" v-show='movieSoonList.length > 0'>
          <div class="tab-list-title">院线即将上映</div>
          <div class="more">更多></div>
          <div class="movieList">
            <div v-for='item in movieSoonList' @click="toMovieDetail(item.id)">
              <img :src="item.images.small">
              <div class="title">{{item.title}}</div>
              <star v-if='item.rating.average != 0' :averages='item.rating.average' :isShow='isShow'
                    class='star'></star>
              <div class="not_show" v-if='item.rating.average == 0'>尚未公映</div>
            </div>
          </div>
        </div>

        <div class="tab-list" v-show='movieSoonList.length > 0'>
          <div class="tab-list-title">精选榜单</div>
          <div class="rankList">
            <div class="topOne" @click="toRank(0)">
              <div class="topOneTitle_f">豆瓣Top250</div>
              <div class="topOneTitle_s">8分以上好电影</div>
            </div>
            <div class="topTwo" @click="toRank(1)">
              <div class="topOneTitle_f">本周口碑榜</div>
              <div class="topOneTitle_s">{{currentWeek}}</div>
            </div>
            <div class="topThree" @click="toRank(2)">
              <div class="topOneTitle_f">新片榜</div>
              <div class="topOneTitle_s">{{currentWeek}}</div>
            </div>
            <div class="topFour" @click="toRank(3)">
              <div class="topOneTitle_f">票房榜</div>
              <div class="topOneTitle_s">票房最高排名</div>
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
        movieList: [],
        movieSoonList: []
      }
    },
    beforeCreate(){
      Indicator.open();
    },
    mounted(){
      this.getHotMovie()
      this.getSoonMovie()
    },
    methods: {
      chooseItem(index){
        this.chooseIndex = index
      },
      getHotMovie(){
        this.$http.get(commonUrl + '/v2/movie/in_theaters?count=8').then(response => {
          Indicator.close()
          this.movieList = response.data.subjects
        }, response => {

        })
      },
      getSoonMovie(){
        this.$http.get(commonUrl + '/v2/movie/coming_soon?count=8').then(response => {
          Indicator.close()
          this.movieSoonList = response.data.subjects
          console.log(response)
        }, response => {

        })
      },
      toMovieDetail(index){
        this.$router.push({name: 'movieDetail', params: {id: index}})
      },
      toRank(index){
        this.$router.push({name: 'rank', params: {id: index}})
      }
    },
    computed: {
      currentWeek(){
        let date = new Date()
        let currentDay = date.getMonth() + 1 + '月' + date.getDate() + '日'
        let myDate = new Date()
        myDate.setDate(myDate.getDate() - 7);
        let beforeDay = myDate.getMonth() + 1 + '月' + myDate.getDate() + '日'

        return beforeDay + '~' + currentDay
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
  }

</style>
