<template>
  <div class="threed">
    <div class="container" :class="{active: isactive}" :style="background">
      <div class="navbar">
        <div class="menu">
          <h3 class="logo">LOGO<span>Name</span></h3>
          <div class="hamburger-menu" @click="toggleClass">
            <div class="bar"></div>
          </div>
        </div>
      </div>

      <div class="main-container">
        <div class="main">
            <slot></slot>
        </div>

        <div class="shadow one"></div>
        <div class="shadow two"></div>
        <div class="shadow three"></div>
      </div>

      <div class="links">
        <ul>
          <li v-for="(item, index) in navlist" 
              :key="index" 
              @click="clicklink(item, index)"
              :class="{underLine: currectIndex == index}">{{item}}</li>
          <button class="sure-btn" @click="sureClick">確定</button>
        </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeD",
  data(){
    return{
      navlist: ["Home", "Swiper", "Forest", "Cube", "Moon"],
      bgcolor: {
        '0': ['#485461', '#28313b'],
        '1': ['rgb(126, 118, 199)', 'rgb(44, 35, 128)'],
        '2': ['rgb(90, 163, 89)', 'rgb(34, 110, 33)'],
        '3': ['#be5959', '#8f3434'],
        '4': ['#4a2b7c','#2b1055']
      },
      vh100: false,
      isactive:false,
      currectIndex: 0
    }
  },
  computed:{
    // 背景顏色切換
    background(){
      let currectIndex = this.currectIndex
      return {backgroundImage:`linear-gradient(135deg, ${this.bgcolor[currectIndex][0]} 0%, ${this.bgcolor[currectIndex][1]} 74%)`}
    }
  },
  methods: {
    clicklink(item, index){
      const link = `/${item.toLowerCase()}`
      this.$router.replace(link)
      this.currectIndex = index
    },
    toggleClass(){
      const hamburger_menu = document.querySelector(".hamburger-menu")
      const container = document.querySelector(".container")

      this.isactive = !this.isactive
    /** 頁面切換 防止 變形 */
      this.vh100 = !this.vh100
      this.$bus.$emit("isvh100", this.vh100)
    },
    sureClick(){
      this.isactive = false
      this.vh100 = !this.vh100
      this.$bus.$emit("isvh100", false)
    }
  },
}
</script>

<style lang="scss" scoped>

body,
button {
  font-family: "Poppins", sans-serif;
}
.container {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  transform-style: preserve-3d;
  // background-image: linear-gradient(135deg, #4a2b7c 0%, #2b1055 74%);

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    height: 3rem;

    .menu {
      padding: 0 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;

      .logo {
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        line-height: 4rem;
        span {
          font-weight: 300;
        }
      }

      .hamburger-menu {
        height: 4rem;
        width: 3rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .bar {
          width: 1.9rem;
          height: 1.5px;
          border-radius: 2px;
          background-color: #eee;
          transition: 0.5s;
          position: relative;

          &:before,
          &:after {
            content: "";
            position: absolute;
            width: inherit;
            height: inherit;
            background-color: #eee;
            transition: 0.5s;
          }

          &:before {
            transform: translateY(-9px);
          }
          &:after {
            transform: translateY(9px);
          }
        }
      }
    }
  }
}

.main-container{

  .main {
    position: relative;
    width: 100%;
    left: 0;
    z-index: 5;
    overflow: hidden;
    transform-origin: left;
    transform-style: preserve-3d;
    transition: 0.5s;
  }
}

.container.active{
  .bar {
    transform: rotate(360deg);
    background-color: transparent;

    &:before {
      transform: translateY(0) rotate(45deg);
    }
    &:after {
      transform: translateY(0) rotate(-45deg);
    }
  }
  .main {
    animation: main-animation 0.5s ease;
    cursor: pointer;
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }
}

@keyframes main-animation {
  from {
    transform: translate(0);
  }

  to {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }
}

.links {
  position: absolute;
  width: 30%;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    li {
      width: 70px;
      text-decoration: none;
      color: #eee;
      padding: 0.7rem 3px;
      display: block;
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: 0.3s;
      opacity: 0;
      transform: translateY(10px);
      
      animation: hide 0.5s forwards ease;

      background-image: linear-gradient(#fff, #fff);
      background-position: -3px 35px;
      background-size: 0 2.5px;
      background-repeat: no-repeat;
      transition: background-size 0.15s;
      border-radius: 3px;

      &:hover {
        color: #fff;
      }
      &.underLine{
        background-size: 100% 2.5px;
      }
    }

    .sure-btn{
      margin-top: 30px;
      margin-left: -25px;
      padding: 8px 40px;
      border-radius: 30px;
      background-color: rgba(91, 99, 117, 0.7);
      color: #fff;
      transition: 0.3s;
      opacity: 0;
      animation: hide 0.5s forwards ease;
    }
  }
}

.container.active .links li,
.container.active .links .sure-btn {
  animation: appear 0.5s forwards ease 0.25s;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes hide {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: 0.5s;
  background-color: white;

  &.one {
    z-index: -1;
    opacity: 0.15;
  }

  &.two {
    z-index: -2;
    opacity: 0.1;
  }
  &.three {
    z-index: -3;
    opacity: 0.05;
  }
}

.container.active{
  .shadow.one {
    animation: shadow-one 0.6s ease-out;
    transform: perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5);
  }

  .shadow.two {
    animation: shadow-two 0.6s ease-out;
    transform: perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5);
  }

  .main:hover + .shadow.one {
    transform: perspective(1300px) rotateY(20deg) translateZ(230px) scale(0.5);
  }

  .main:hover {
    transform: perspective(1300px) rotateY(20deg) translateZ(340px) scale(0.5);
  }
}

@keyframes shadow-one {
  0% {
    transform: translate(0);
  }

  5% {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }

  100% {
    transform: perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5);
  }
}

@keyframes shadow-two {
  0% {
    transform: translate(0);
  }

  20% {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }

  100% {
    transform: perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5);
  }
}

</style>
