<template>
  <div id='movieDetail'>
    <mt-header class='header' title="记忆大师">
      <mt-button icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="nav" v-if='large !="" '>
      <img class="nav-img" :src="large">
    </div>
    <div class="main">
      <div class="main-name">
        <div class="name">
          {{movie.original_title}}
        </div>
        <div class="type">
          <span>{{movie.year}}/</span>
          <span v-for='item in movie.countries'>{{item}}/</span>
          <span v-for='(item,index) in movie.genres'>{{item}}<span v-if='index < movie.genres.length-1'>/</span></span>
        </div>
      </div>
      <div class="point">
        <div>豆瓣评分</div>
        <div>
          <star :averages='average'></star>
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
        average:''
      }
    },
    beforeCreate(){
      Indicator.open()
    },
    mounted(){
      this.getMovieDetail()
    },
    methods: {
      getMovieDetail(){
        this.$http.get(commonUrl + '/v2/movie/subject/' + this.$route.params.id).then(response => {
          Indicator.close()
          this.movie = response.data
          this.large = response.data.images.large
          this.average = response.data.rating.average
          console.log(response)
        }, response => {

        })
      }
    },
    components:{
      star
    }
  }

</script>
<style lang="scss">
  #movieDetail {
    .header {
      background: #3a4652;
    }
    .nav {
      background: #3a4652;
      text-align: center;
      margin: {
        top: -.1rem;
      }
    ;
      .nav-img {
        width: 60%;
        padding: {
          top: .5rem;
          bottom: 1rem;
        }
      ;
      }

    }
    .main {
      background: #f4f7f9;
      .main-name {
        .name {
          font: {
            size: 1.5rem;
          }
          padding: {
            top: 1.5rem;
            left: 1rem;
          }
        ;
        }
        .type {
          margin: {
            top: .6rem;
            left: 1rem;
          }
        ;
          color: #9b9b9b;
          font: {
            size: .7rem;
          }
        ;
        }
      }
    }
  }

</style>
