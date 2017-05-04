<template>
  <div>
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
        <div class="topTwo" @click="toRank(3)">
          <div class="topOneTitle_f">本周口碑榜</div>
          <div class="topOneTitle_s">{{currentWeek}}</div>
        </div>
        <div class="topThree" @click="toRank(3)">
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
</template>

<script type="text/ecmascript-6">
  import {Indicator, Tabbar, TabItem, TabContainer} from 'mint-ui';
  import star from '../../components/star/star'
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
      chooseItem(index, type){
        this.chooseIndex = index
        console.log(type)
        switch (type) {
          case 1:
            this.$router.push({path: '/home'})
            break
          case 2:
            this.$router.push({path: '/home/book'})
        }
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
      },
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

</style>
