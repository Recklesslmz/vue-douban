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
          <div>喜欢</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/riji.png"></div>
          <div>日记</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/xiangce.png"></div>
          <div> 相册</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/guangbo.png"></div>
          <div> 我的广播</div>
        </div>
      </div>
      <div class="main_menu">
        <div>
          <div class="logo"><img src="../assets/xihuan.png"></div>
          <div>电影.电视</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/riji.png"></div>
          <div>读书</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/xiangce.png"></div>
          <div> 音乐</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/guangbo.png"></div>
          <div>同城活动</div>
        </div>
      </div>
      <div class="main_menu">
        <div>
          <div class="logo"><img src="../assets/xihuan.png"></div>
          <div>豆瓣时间</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/riji.png"></div>
          <div>豆列</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/xiangce.png"></div>
          <div> 订单</div>
        </div>
        <div>
          <div class="logo"><img src="../assets/guangbo.png"></div>
          <div> 钱包</div>
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
      /*background: #8094e4;*/
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
          ;
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
        ;
          font: {
            size: 1.5rem;
            weight: 500;
          }
        ;
        }
        .nav_info_id {
          margin: {
            top: .5rem;
          }
        ;
        }
        .line {
          border: {
            top: 1px solid rgba(250, 250, 250, .2);
          }
        ;
          margin: {
            top: .5rem;
          }
        ;
        }
        .nav_info_focus {
          font: {
            weight: 400;
          }
        ;
          margin: {
            top: 1rem;
          }
        ;
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
        .logo {
          img {
            width: 2rem;
            height: 2rem;
          }
        }
        div {
          flex: 1;
        }
      }
    }
  }
</style>
