<template>
  <div id="self">
    <div class="nav">
      <div class="nav_header">
        <div>
          <img src="../assets/logo.png">
        </div>
      </div>
      <div class="nav_info">
        <div class="nav_info_name">Reckless</div>
        <div class="nav_info_id">ID:102410241024</div>
        <div class="line"></div>
        <div class="nav_info_focus">
          <span class="focus_f">关注：0</span>
          <span class="focus_d">被关注：0</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main_menu">
        <div>
          <div class="logo"><img src="../assets/xihuan.png"></div>
          <div class="desc">喜欢</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/riji.png"></div>
          <div class="desc">日记</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/xiangce.png"></div>
          <div class="desc"> 相册</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/guangbo.png"></div>
          <div class="desc"> 我的广播</div>
        </div>
      </div>
      <div class="main_menu">
        <div>
          <div class="logo"><img src="../assets/dianying.png"></div>
          <div class="desc">电影.电视</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/dushu.png"></div>
          <div class="desc">读书</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/yinyue.png"></div>
          <div class="desc"> 音乐</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/tongchenghuodong.png"></div>
          <div class="desc">同城活动</div>
        </div>
      </div>
      <div class="main_menu">
        <div>
          <div class="logo"><img src="../assets/douban.png"></div>
          <div class="desc">豆瓣时间</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/doulie.png"></div>
          <div class="desc">豆列</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/dingdan.png"></div>
          <div class="desc"> 订单</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/qianbao.png"></div>
          <div class="desc"> 钱包</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

</script>
<style lang="scss">
  @import "../sass/common";

  #self {
    .nav {
      display: flex;
      height: 9rem;
      background: -webkit-linear-gradient(-40deg, #8094e4 170px, #798ee1 80px);
      .nav_header {
        flex: 1;
        text-align: center;
        div {
          line-height: 13.5rem;
          img {
            width: 5rem;
            height: 5rem;
            border: {
              radius: 50%;
            }

            border: 2px solid #fff;
          }
        }
      }
      .nav_info {
        color: #fff;
        flex: 2;
        .nav_info_name {
          margin: {
            top: 2.2rem;
          }
          font: {
            size: 1.4rem;
            weight: 300;
          }
        }
        .nav_info_id {
          margin: {
            top: .5rem;
          }
          font: {
            size: .8rem;
            weight: 300;
          }
        }
        .line {
          border: {
            top: 1px solid rgba(250, 250, 250, .2);
          }
          margin: {
            top: .5rem;
          }
        }
        .nav_info_focus {
          font: {
            weight: 400;
          }
          margin: {
            top: 1rem;
          }
          .focus_d {
            position: relative;
            left: 2rem;
          }
        }
      }
    }
    .main {
      .main_menu {
        display: flex;
        text-align: center;
        background: #fff;
        margin: {
          top: .1rem;
        }
        padding: {
          top: 1rem;
          bottom: 1rem;
        }
        .logo {
          img {
            width: 1.6rem;
            height: 1.6rem;
          }
        }
        .desc {
          margin: {
            top: .5rem;
          }
          color: #5d5d5d;
          font: {
            weight: 400;
            size: .8rem;
          }
        }
        div {
          flex: 1;
        }
      }
    }
  }
</style>
