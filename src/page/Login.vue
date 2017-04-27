<template>
  <div id='Login'>
    <div class="title">
      欢迎来到豆瓣
    </div>
    <div class="main">
      <div><input type="text" class="m-passport" placeholder="账号"></div>
      <div><input type="text" class="m-password" placeholder="密码"></div>
    </div>

    <div class="button">
      <button>登录</button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

</script>
<style lang="scss">
  @import "../sass/common";

  #Login {
    text-align: center;
    .title {
      color: $base-color;
      margin: {
        top: 5rem;
      }
    ;
      font: {
        size: 2rem;
        weight: 300;
      }
    ;
      letter-spacing: .2rem;
    }
    .main {
      margin: {
        top: 2rem;
      }
    ;
      div {
        width: 94%;
        margin: {
          left: 3%;
        }
      ;
        input::-webkit-input-placeholder{
          padding: {
            left:1rem;
          };
        }
        .m-passport {
          height: 2.5rem;
          width: 100%;
          background: #fff;
          color: #999;
          font:{
            weight: 300;
          };
          border: {
            top-left-radius: .3rem;
            top-right-radius: .3rem;
            top: 1px solid #dedede;
            left: 1px solid #dedede;
            right: 1px solid #dedede;

          }
        }
        .m-password {
          height: 2.5rem;
          width: 100%;
          background: #fff;
          color: #999;
          font:{
            weight: 300;
          };
          border: {
            bottom-left-radius: .3rem;
            bottom-right-radius: .3rem;
            bottom: 1px solid #dedede;
            top: 0.5px solid #dedede;
            left: 1px solid #dedede;
            right: 1px solid #dedede;
          }
        }
      }
    }
    .button {
      button {
        height: 2.5rem;
        width: 94%;
        margin: {
          top: 1rem;
        }
      ;
        background: $base-color;
        color: #fff;
        font: {
          size: 1px;
        }
        letter-spacing: .3rem;
        border: none;
        border: {
          radius: .3rem;
        }
      }
    }
  }

</style>
