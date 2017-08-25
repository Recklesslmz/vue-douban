<template>
  <div id='movieDetail' v-if='movie.title != null'>
    <mt-header class='header' :title="filmName">
      <mt-button @click='backHome' icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="nav" v-if='large !="" '>
      <img class="nav-img" :src="large">
    </div>
    <div class="main">
      <div class="main-name">
        <div class="name">
          {{movie.title}}
        </div>
        <div class="type">
          <span>{{movie.year}}/</span>
          <span v-for='item in movie.countries'>{{item}}/</span>
          <span v-for='(item,index) in movie.genres'>{{item}}<span v-if='index < movie.genres.length-1'>/</span></span>
        </div>
      </div>
      <div class="point">
        <div class="point_title">豆瓣评分</div>
        <div>
          <div class="point_rating">{{movie.rating.average}}</div>
          <star class='point_star' :averages='average' :isShow='isShow'></star>
          <div class="point_count" v-if='movie.rating.average > 0'>{{movie.collect_count}}</div>
          <div class="point_n" v-if='movie.rating.average === 0'>尚未上映</div>
        </div>
      </div>
    </div>

    <div class="review">
      <div>
        <button>想看{{movie.wish_count}}</button>
      </div>
      <div>
        <button>看过{{movie.reviews_count}}</button>
      </div>
    </div>

    <div class="desc">
      <div class="title">剧情简介</div>
      <div class="content">{{movie.summary}}</div>
    </div>
    <div class="director">
      <div class="title">影人</div>
      <div class="worker">
        <div v-for="item in movie.directors">
          <img :src="item.avatars.small" v-if="item.avatars.small">
          <div class="name" v-if="item.name">{{item.name}}</div>
        </div>
        <div v-for='item in movie.casts'>
          <img :src="item.avatars.small">
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import {Header, Indicator} from 'mint-ui';
  import star from '../components/star/star';
  export default {
    data(){
      return {
        movie: {},
        large: '',
        filmName: '',
        average: '',
        isShow: false
      }
    },
    beforeCreate(){
      Indicator.open()
    },
    mounted(){
      this.getMovieDetail()
    },
    methods: {
      /**
       * 获取电影详情
       *
       * **/
      getMovieDetail(){
        this.$http.get(commonUrl + '/v2/movie/subject/' + this.$route.params.id).then(response => {
          Indicator.close()
          this.movie = response.data
          this.large = response.data.images.large
          this.average = response.data.rating.average
          this.filmName = response.data.title
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
  #movieDetail {
    .header {
      background: #3a4652;
      width: 100%;
      position: fixed;
    }
    .nav {
      background: #3a4652;
      text-align: center;
      margin: {
        top: -.1rem;
      }
      padding: {
        top: 3rem;
      }
      .nav-img {
        width: 60%;
        padding: {
          top: .5rem;
          bottom: 1rem;
        }
      }

    }
    .main {
      background: #f4f7f9;
      overflow: hidden;
      padding: {
        bottom: 2rem;
      }
      .main-name {
        .name {
          font: {
            size: 1.5rem;
          }
          padding: {
            top: 1.5rem;
            left: 1rem;
          }
        }
        .type {
          margin: {
            top: .6rem;
            left: 1rem;
          }
          color: #9b9b9b;
          font: {
            size: .7rem;
          }
        }
      }
      .point {
        text-align: center;
        background: #fff;
        width: 5rem;
        height: 5.5rem;
        float: right;
        margin: {
          top: -3rem;
          right: 1rem;
        }
        box-shadow: 1px 1px 6px #dcdcdc;
        .point_title {
          font: {
            size: .7rem;
            weight: 300;
          }
          color: #9b9b9b;
          margin: {
            top: .5rem;
          }
        }
        .point_star {
          position: relative;
          left: 1.2rem;

        }
        .point_rating {
          margin: {
            top: .2rem;
          }
          font: {
            size: 1.5rem;
          }
        }
        .point_count {
          color: #9b9b9b;
          font: {
            size: .7rem;
            weight: 300;
          }
          margin: {
            top: .2rem;
          }
        }
        .point_n {
          margin: {
            top: .3rem;
          }
          color: #9b9b9b;
          font: {
            size: .7rem;
            weight: 300;
          }
        }
      }
    }
    .review {
      background: #f4f7f9;
      display: flex;
      text-align: center;
      div {
        flex: 1;
        button {
          width: 70%;
          height: 2rem;
          border: 1px solid #ffb13e;
          background: #f4f7f9;
          color: #ffb13e;
          border: {
            radius: .3rem;
          }
        }
      }
    }
    .desc {
      background: #f4f7f9;
      padding: {
        top: 1rem;
      }
      .title {
        color: #9b9b9b;
        font: {
          size: .8rem;
          weight: 300;
        }
        margin: {
          left: 2%;
        }
      }
      .content {
        width: 96%;
        text-align: justify;
        margin: {
          left: 2%;
        }
        margin: {
          top: .5rem;
        }
        font: {
          size: .9rem;
          weight: 300;
        }
      }
    }
    .director {
      background: #f4f7f9;
      padding: {
        bottom: 2rem;
      }
      .title {
        padding: {
          top: .5rem;
        }
        color: #9b9b9b;
        font: {
          size: .8rem;
          weight: 300;
        }
        margin: {
          left: 2%;
        }
      }
      .worker {
        width: 96%;
        margin: {
          left: 2%;
          top: .5rem;
        }
        overflow-x: scroll;
        text-align: center;
        display: flex;
        div {
          flex: 1;
        }
        .name {
          color: #777;
          font: {
            weight: 300;
            size: .8rem;
          }
        }
      }
      .worker::-webkit-scrollbar {
        display: none
      }
    }

  }

</style>
