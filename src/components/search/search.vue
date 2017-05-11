<template>
  <div id="search">
    <div class="nav_search">
      <div class="search_action">
        <input type="text" v-model="tag" placeholder="搜索">
      </div>
      <div class="search_btn" @click='getSearch'>
        <span>搜索</span>
      </div>
    </div>
    <div v-show="tag == ''">
      <div class="main">
        <div class="main_list" @click='toDetail(0)'>
          <div class="movie">电影</div>
          <div class="main_desc">影院热播</div>
        </div>
        <div class="main_list">
          <div class="television">电视</div>
          <div class="main_desc">正在热播</div>
        </div>
        <div class="main_list">
          <div class="book">图书</div>
          <div class="main_desc">畅销图书</div>
        </div>

      </div>
      <div class="main">
        <div class="main_list">
          <div class="city">同城</div>
          <div class="main_desc">周末活动</div>
        </div>
        <div class="main_list">
          <div class="group">小组</div>
          <div class="main_desc">志趣相投</div>
        </div>
        <div class="main_list">
          <div class="music">音乐</div>
          <div class="main_desc">新碟榜</div>
        </div>
      </div>
      <div class="main">
        <div class="main_list">
          <div class="read">阅读</div>
          <div class="main_desc">电子书</div>
        </div>
        <div class="main_list">
          <div class="game">游戏</div>
          <div class="main_desc">虚拟世界</div>
        </div>
        <div class="main_list">
          <div class="application">应用</div>
          <div class="main_desc">玩手机</div>
        </div>

      </div>
      <div class="main">
        <div class="main_list">
          <div class="thing">东西</div>
          <div class="main_desc">心爱之物</div>
        </div>
        <div class="main_list">
          <div class="fm">FM</div>
          <div class="main_desc">红心之歌</div>
        </div>
        <div class="main_list">
          <div class="market">市集</div>
          <div class="main_desc">购买原创</div>
        </div>

      </div>
    </div>
    <div>
      <div class="search_list" @click='toMovieDetail(item.id)' v-for='item in subjects'>
        <div class="search_img">
          <img :src="item.images.small">
        </div>
        <div class="search_desc">
          <div class="search_name">{{item.title}}</div>
          <star :averages='item.rating.average' :isShow='isShow' class='star'></star>
        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import star from '../star/star'
  import {Indicator} from 'mint-ui';
  export default {
    data(){
      return {
        isShow: true,
        tag: "",
        count: 10,
        start: 0,
        subjects: []
      }
    },
    methods: {
      getSearch(){
        Indicator.open()
        this.$http.get(commonUrl + '/v2/movie/search?q=' + this.tag + '&count=' + this.count).then(response => {
          Indicator.close()
          this.subjects = response.data.subjects
        }, response => {
        })
      }
      ,
      toMovieDetail(id){
        this.$router.push({name: 'movieDetail', params: {id: id}})
      },
      toDetail(index){
        switch (index) {
          case 0:
            this.$router.push({path: '/'})
            break
        }
      }
    },
    components: {
      star
    }

  }
</script>
<style lang="scss">
  @import "../../sass/common";

  #search {
    .nav_search {
      display: flex;
      .search_action {
        flex: 8;
        width: 92%;
        margin: {
          left: 3%;
          top: 1rem
        }
      ;
        input {
          width: 100%;
          background: #f3f3f3;
          height: 2rem;
          border: {
            radius: .3rem
          }
        ;
          font: {
            weight: 300;
          }
        ;
        }
        input::-webkit-input-placeholder {
          position: relative;
          left: 1rem;
          font-weight: 100;
        }
      }
      .search_btn {
        flex: 2;
        line-height: 3.8rem;
        margin: {
          left: 1rem;
        }
      ;
      }
    }
    .main {
      display: flex;
      text-align: center;
      margin: {
        top: 2rem;
      }
    ;
      .main_list {
        flex: 1;
        .main_desc {
          font: {
            size: .8rem;
          }
        ;
          color: #999;
          letter-spacing: 1px;
          margin: {
            top: .5rem;
          }
        ;
        }
        .movie {
          font-size: $fontSize;
          color: #2384E8;
        }
        .television {
          font-size: $fontSize;
          color: #7A6ADB;
        }
        .book {
          font-size: $fontSize;
          color: #9F7860;
        }
        .city {
          font-size: $fontSize;
          color: #E6467E;
        }
        .group {
          font-size: $fontSize;
          color: #2AB8CC;
        }
        .music {
          font-size: $fontSize;
          color: #F48F2E;
        }
        .read {
          font-size: $fontSize;
          color: #9F7860;
        }
        .game {
          font-size: $fontSize;
          color: #9F7860;
        }
        .application {
          font-size: $fontSize;
          color: #5774C5
        }
        .thing {
          font-size: $fontSize;
          color: #E1644D
        }
        .fm {
          font-size: $fontSize;
          color: #40CFA9
        }
        .market {
          font-size: $fontSize;
          color: #42BA45
        }
      }
    }
    .search_list {
      display: flex;
      width: 94%;
      margin: {
        left: 3%;
        top: .7rem;
      }
    ;
      padding: {
        bottom: .7rem;
      }
    ;

      border: {
        bottom: 1px solid #dedede;
      }
    ;
      .search_img {

      }
      .search_desc {
        margin: {
          left: 4%;
          top: .3rem;
        }
      ;
        .search_name {
          font: {
            size: 1.1rem;
          }
        ;
        }
        .star {
          margin: {
            top: 1rem;
          }
        ;
          div {
            img {
              width: .7rem;
            }
          }
          .rating {
            color: #9b9b9b;
            font-size: .8rem;
            position: relative;
            left: .1rem;
            top: .2rem;
          }
        }
      }
    }
  }

</style>
