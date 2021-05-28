<template>
  <div class="moonContainer" :class="{vh100: isvh100}">
    <section>
      <img src="../assets/img/stars.png" alt="" class="stars">
      <img src="../assets/img/moon.png" alt="" class="moon">
      <img src="../assets/img/mountains_behind.png" alt="" class="m_b">
      <h2 class="text">Moon Light</h2>
        <button class="btn" @click="readMore">Explore</button>
      <img src="../assets/img/mountains_front.png" alt="" class="m_f">
    </section>

    <div class="sec">
      <h2>Parallax Scrolling Effects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti nobis voluptas 
        iusto praesentium, nulla dolorum quasi harum aperiam quam ea facilis odit vel magni eos 
        labore recusandae dolores perferendis!<br><br></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Moon",
  data(){
    return {
      isvh100:true,
    }
  },
  mounted() {
    const starts = document.querySelector('.stars')
    const moon = document.querySelector('.moon')
    const mountains_b = document.querySelector('.m_b')
    const mountains_f = document.querySelector('.m_f')
    const text = document.querySelector('.text')
    const btn = document.querySelector('.btn')

    window.addEventListener('scroll',function(){
      let value = window.scrollY;
      starts.style.left = value * 0.25 + 'px'
      moon.style.top = value * 1.05 + 'px'
      mountains_b.style.top = value * 0.5 + 'px'
      mountains_f.style.top = value * 0 + 'px'
      text.style.marginRight = value * 4 + 'px'
      btn.style.marginTop = value * 1.5 + 'px'
    })

    this.$bus.$on("isvh100", (vh100) => {
      this.isvh100 = vh100
    })
  },
  methods: {
    readMore(){
      const sec = document.querySelector('.sec')
      console.log(sec.offsetTop)
      window.scrollTo({
        top: 954,
        left: 0,
        behavior: "smooth"
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.vh100{
  height: 100vh
}
.moonContainer{
  scroll-behavior: smooth;

  box-sizing: border-box;
  background: linear-gradient(#2b1055,#7597de);
  width: 100%;

  section{
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 90%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;

      &.moon{
        mix-blend-mode: screen;
      }
      &.m_f{
        z-index: 10;
      }
    }

    .text{
      right: -350px;
      position: absolute;
      color: #fff;
      white-space: nowrap;
      font-size: 7.5vw;
      z-index: 8;
    }

    .btn{
      color: #2b1055;
      background-color: #fff;
      border-radius: 40px;
      padding: 8px 30px;
      position: relative;
      font-size: 1.5em;
      font-weight: 800;
      z-index: 8;
      transform: translate(-80px,100px);
    }

    &::before{
      content:"";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top,#1c0522,transparent);
      z-index: 1000;
    }
  }

  .sec{
    position: relative;
    padding: 80px;
    background-color: #1c0522;
    z-index: 11;

    h2{
      font-size: 3.5em;
      margin-bottom: 10px;
      color: #fff;
    }

    p{
      color: #fff;
      font-size: 1.5em;
    }
  }
}

</style>
