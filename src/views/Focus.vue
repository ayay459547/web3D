<template>
  <div class="focus">
    <div class="focus-wrap">
      <div class="box">
        <p>Focus</p>
      </div>
      <div class="box">
        <p>Focus</p>
      </div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Focus",
  data(){
    return{
      defaultImg: []
    }
  },
  computed:{
    imgUrl(){
      if(this.$store.state.bgImg.length == ""){
        return "url('https://pixabay.com/get/g8a6446889581683006cb1cf00c5b07db789d2672aef8c61e6beebf5a89dc685857b871449e68abe3f3c225341b42d84582305b6d661b6739da680f37240cd441_1280.jpg')"
      }
      return `url(${this.$store.state.bgImg})`
    },
  },
  mounted(){
    const pos = document.documentElement;
    
    pos.style.setProperty('--imgurl', this.imgUrl)
    pos.addEventListener('mousemove', e => {
      pos.style.setProperty('--x', e.clientX + 'px')
      pos.style.setProperty('--y', e.clientY + 'px')
    })
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@function bgimg($imgurl){
  @return $imgurl
}

%bgSet{
  background-image: bgimg(var(--imgurl));
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
}

.focus{
  width: 100%;
  height: 100vh;
  background-color: rgb(172, 160, 56);
  position: relative;

  .focus-wrap{
    @extend %bgSet;
    width: 100%;
    height: 100vh;
    position: relative;

    .box{
      @extend %bgSet;
      width: 100%;
      height: 100%;
      position: absolute;
      background-attachment: fixed;

      &:nth-child(1){
        filter: blur(10px);
      }
      &:nth-child(2){
        clip-path: circle(150px at var(--x) var(--y));
      }

      p{
        position: absolute;
        color: #fff;
        font-size: 10em;
        font-weight: 900;
        transform: translate(0, 0);
        transform: translate(calc(var(--x)/25),calc(var(--y)/25));
      }
    }

    .circle{
      position: absolute;
      width: 300px;
      height: 300px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
      top: -150px;
      left: -150px;
      transform: translate(var(--x), var(--y));
    }
  }
}
</style>
