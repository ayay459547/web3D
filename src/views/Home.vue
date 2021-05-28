<template>
  <div class="home">
    <div class="overlay">
      <div class="inner">
        <h2 class="title">
          <div class="myid">
            <div class="anid">D10713014 D10713014 D10713014</div>
          </div> 
          <div class="text">
            <div class="xie">謝謝謝</div>
          </div>
          <div class="text">
            <div class="zhen">禎禎禎</div>
          </div>
          <div class="text">
            <div class="zhan">展展展</div>
          </div>
        </h2>
        <p>
          請點右上選單 , 還有其他四種不同效果的網頁
        </p>
        <button class="btn" @click="ishideClick">點擊說明</button>
      </div>
    </div>

    <div class="read" :class="{hideRead:ishide}">
      <p>這個網頁是使用 Vue2.0 製作</p>
      <p>Forest 有使用 vanilla-tilt 完成卡片效果</p>
      <p>axios 請求 pixbay.com 的圖片 完成 Cube 部分</p>
      <p>製作日期 : 2021/5</p>
      <p>我的 github : ayay459547</p> 
      <button @click="ishideClick">
        <div class="bar"></div>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      ishide: true
    }
  },
  methods:{
    ishideClick(){
      this.ishide = !this.ishide
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  min-height: 100vh;
  width: 100%;
  background: url("../assets/img/home_bg.jpg") no-repeat top center / cover;
  position: relative;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(43, 51, 59, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
      max-width: 35rem;
      text-align: center;
      color: #fff;
      padding: 0 2rem;
      letter-spacing: 2px;

      .title {
        font-size: 2.7rem;
        
        .myid{
          width: 222px;
          height: 45px;
          display: inline-block;
          overflow: hidden;
          position: relative;

          .anid{
            position: relative;
            top: -20px;
            animation: myid 5s infinite alternate;
          }
        }
        .text{
          // border: 1px solid black;
          width: 45px;
          height: 45px;
          overflow: hidden;
          display: inline-block;
          position: relative;
          .zhen{
            position: relative;
            top: -100px;
            animation: zhen 6s 2s infinite alternate;
          }
          .xie{
            width: 140px;
            position: relative;
            left: -90px;
            animation: xie 4s 3s infinite alternate;
          }
          .zhan{
            width: 140px;
            position: relative;
            left: 0px;
            animation: zhan 6s 1s infinite alternate;
          }
        }
      }

      .btn {
        margin-top: 1rem;
        padding: 0.6rem 1.8rem;
        background-color: #1179e7;
        border: none;
        border-radius: 25px;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  @keyframes myid {
    0% {
      top: 0px;
    }
    20%{
      top: 0px;
    }
    40%{
      top: -50px;
    }
    60%{
      top: -50px;
    }
    80%{
      top: -100px;
    }
    100% {
      top: -100px;
    }
  }

  @keyframes xie {
    0% {
      left: -90px;
    }
    20%{
      left: -90px;
    }
    40%{
      left: -45px;
    }
    60%{
      left: -45px;
    }
    80%{
      left: 0px;
    }
    100% {
      left: 0px;
    }
  }

  @keyframes zhen {
    0% {
      top: -100px;
    }
    20%{
      top: -100px;
    }
    40%{
      top: -50px;
    }
    60%{
      top: -50px;
    }
    80%{
      top: 0px;
    }
    100% {
      top: 0px;
    }
  }

  @keyframes zhan {
    0% {
      left: 0px;
    }
    20%{
      left: 0px;
    }
    40%{
      left: -45px;
    }
    60%{
      left: -45px;
    }
    80%{
      left: -90px;
    }
    100% {
      left: -90px;
    }
  }

  .read{
    position: fixed;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 40%;
    height: 300px;
    background-color: rgb(194, 194, 194);
    border: 5px solid rgba(91, 99, 117);
    border-radius: 30px;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    transition: all 0.4s ease;

    &.hideRead{
      transform: translate(-50%, -100%);
    }
    button{
      width: 55px;
      height: 50px;
      position: absolute;
      right: 10px;
      top: 10px;
      background-color: rgba(255, 255, 255, 0);
      border: none;
      cursor: pointer;

      .bar{
        width: 40px;

        &::after,
        &::before{
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          border: 1px solid rgba(91, 99, 117);
          background-color: rgba(91, 99, 117);
        }

        &::after{
          transform: rotate(45deg);
        }
        &::before{
          transform: rotate(-45deg) translate(0, 2px);
        }
      }
    }
  }
}

</style>
