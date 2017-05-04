<template>
  <div id='rank' v-if='topList.length > 0'>
    <mt-header class='header' :title="filmName">
      <mt-button @click='backHome' icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="topMenu" v-show='this.$route.params.id === 0'>
      <div @click="choose(index)" :class="[{chooseStyle:index == isChoose}]" v-for='(item,index) in topMenuList'>
        {{item.name}}
      </div>
    </div>
    <div class="list-main">
      <div class="list" v-show="isChooseShow" v-for='(item,index) in topList' @click='toMovieDetail(item.id)'>
        <div class="line">
          <div class="lineLeft"></div>
          <div
            :class="[num,{numF:index+ currentChoose + 1 == 0,numS:index+ currentChoose + 1 == 1,numT:index+ currentChoose + 1 ==2}]">
            {{index + currentChoose + 1}}
          </div>
          <div class="lineRight"></div>
        </div>
        <div class="menu">
          <div class="avatars"><img :src="item.images.medium"></div>
          <div class="info">
            <div class="name">{{item.title}}</div>
            <star class='star' :averages='item.rating.average' :isShow='isShow'></star>
            <div class="alts"><span>导演:</span><span v-for='item2 in item.directors'>{{item2.name}}</span></div>
            <div class="alts"><span>演员:</span><span v-for="(item3,index) in item.casts">{{item3.name}}<span
              v-if='index < item.casts.length -1'>/</span></span></div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import star from '../components/star/star'
  import {Indicator, Header} from 'mint-ui';
  export default {
    data(){
      return {
        start: 0,
        count: 50,
        num: 'num',
        isShow: true,
        isChoose: '',
        isChooseShow: true,
        currentChoose:0,
        filmName: 'TOP250',
        topList: [],

        topMenuList: [{name: '1-50', type: 0}, {name: '51-100', type: 1}, {name: '101-150', type: 2}
          , {name: '151-200', type: 3}, {name: '201-250', type: 4}]
      }
    },
    beforeCreate(){
      Indicator.open()
    },
    mounted(){
      switch (this.$route.params.id) {
        case 0:
          this.getTop()
          this.filmName='TOP250'
          break
        case 1:
          this.getWeekly()
          break
        case 2:
          this.getNew()
          break
        case 3:
          this.getInTheaters()
          this.filmName='票房榜'
          break
      }

    },
    methods: {
      /**
       * TOP250
       * **/
      getTop(){
        this.$http.get(commonUrl + '/v2/movie/top250?start=' + this.start + '&count=' + this.count).then(response => {
          console.log(response)
          Indicator.close()
          this.topList = response.data.subjects
        }, response => {

        })
      },
      /**本周口碑榜
       * **/
      getWeekly(){
        this.$http.get(commonUrl + '/v2/movie/weekly').then(response => {
          console.log(response)
          Indicator.close()
          this.topList = response.data.subjects
        }, response => {

        })
      },
      /**
       * 新片榜
       * **/
      getNew(){
        this.$http.get(commonUrl + '/v2/movie/new_movies').then(response => {
          console.log(response)
          Indicator.close()
          this.topList = response.data.subjects
        }, response => {

        })
      },
      /**
       * 正在上映
       * **/
      getInTheaters(){
        this.$http.get(commonUrl + '/v2/movie/in_theaters').then(response => {
          console.log(response)
          Indicator.close()
          this.topList = response.data.subjects
        }, response => {

        })
      },
      toMovieDetail(index){
        this.$router.push({name: 'movieDetail', params: {id: index}})
      },
      choose(index){
        this.isChoose = index
        this.isChooseShow = false
        Indicator.open()
        switch (index) {
          case 0:
            this.start = 0
            this.currentChoose = 0
            break
          case 1:
            this.start = 50
            this.currentChoose = 50
            break
          case 2:
            this.start = 100
            this.currentChoose = 100
            break
          case 3:
            this.start = 150
            this.currentChoose = 150
            break
          case 4:
            this.start = 200
            this.currentChoose = 200
            break
        }
        this.$http.get(commonUrl + '/v2/movie/top250?start=' + this.start + '&count=' + this.count).then(response => {
          console.log(response)
          Indicator.close()
          this.isChooseShow = true
          this.topList = response.data.subjects
        }, response => {

        })
      },
      backHome(){
        this.$router.go(-1)
      }
    },
    components: {
      star
    }
  }

</script>
<style lang="scss">
  #rank {
    margin: {
      bottom: 1rem;
    }
  ;
    .header {
      position: fixed;
      width: 100%;
      z-index: 9999;
      background: #f7f8f9;
      color: #000;
      top: 0;
      font: {
        size: 1.1rem;
        weight: bolder;
      }
    ;
    }
    .topMenu {
      display: flex;
      text-align: center;
      height: 2.5rem;
      position: fixed;
      top: 2.5rem;
      width: 100%;
      background: #fff;
      z-index: 9999;
      div {
        flex: 1;
        line-height: 2.5rem;
        color: #9a9b9c;
        font: {
          weight: 300;
        }
      ;
      }
      .chooseStyle {
        color: #474849;
        font: {
          weight: bolder;
        }
      ;
        border: {
          bottom: 2px solid #474849;
        }
      ;
      }
      border: {
        bottom: 1px solid #dedede;
      }
    ;
    }
    .list-main {
      margin: {
        top: 7rem;
      }
    ;
    }
    .list {
      margin: {
        top: 3rem;
      }
    ;
    }
    .line {
      display: flex;
      text-align: center;
      margin: {
        top: 1rem;
      }
    ;
      .numF {
        color: red !important;
      }
      .numS {
        color: #f18d59 !important;
      }
      .numT {
        color: #f9c362 !important;
      }
      .num {
        flex: 5;
        position: relative;
        top: -.4rem;
        color: #9a9b9c;
        font: {
          size: 1.2rem;
          style: italic;
        }
      ;
      }
      .lineLeft {
        flex: 1;
        position: relative;
        left: 8rem;
        border: {
          top: 1px solid #dedede;
        }
      ;
      }
      .lineRight {
        flex: 1;
        position: relative;
        right: 8rem;
        border: {
          top: 1px solid #dedede;
        }
      ;
      }
    }
    .menu {
      width: 90%;
      margin: {
        left: 5%;
      }
    ;
      box-shadow: 1px 1px 10px #dcdcdc;
      display: flex;
      .avatars {
        padding: 1rem 1rem 1rem 1rem;
      }
      .info {
        padding: 1rem 1rem 1rem 1rem;
        .name {
          font: {
            weight: bolder;
          }
        ;
        }
        .star {
          margin: {
            top: .3rem;
          }
        ;
        }
        .alts {
          color: #999a9b;
          margin: {
            top: .5rem;
          }
        ;
          span {
            font: {
              weight: 300;
            }
          ;
          }
        }
      }
    }
  }

</style>
