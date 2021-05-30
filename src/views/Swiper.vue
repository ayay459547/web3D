<template>
  <div class="con-swiper" :style="{backgroundImage: `url( ${imgList[currentImgIndex]} )`}">
    <div class="wrap-swiper">
      <div class="swiper-pagination"></div>
      <div class="swiper-text">
        這裡的圖片使用Vuex與Focus連動背景圖<br/>
        <button class="autopaly" @click="autoPlay">自動播放</button>
        <button class="autopaly" @click="stopPlay">停止播放</button>    
      </div>
      <swiper ref="mySwiper" :options="swiperOptions" 
        @swiper="onSwiper" 
        @click="clickimg" 
        @slideChange="onSlideChange">
        <swiper-slide v-for="(item, index) in imgList" :key="index">
          <img :src="item" :alt="item" @load="imgLoad">
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import {getImg} from '../network/getImg'
import {debounce} from '../common/utils'
import 'swiper/swiper-bundle.min.css'
import {
  Swiper,
  SwiperSlide,
} from 'vue-awesome-swiper';  
import SwiperCore, {  
  Autoplay,
  Navigation,
  EffectCoverflow, 
  Pagination
} from 'swiper';
SwiperCore.use([Navigation, Autoplay, EffectCoverflow, Pagination]); 

export default {
  data() {
    return {
      imgList: [],
      currentImgIndex: 0,

      //輪播設定
      swiperOptions: {
        direction: "horizontal", // 橫向 horizontal 直向 vertical
        effect: "coverflow",  //論播特效
        slidesPerView: 3,  //畫面出現幾個
        grabCursor: true,   //滑鼠可以用
        spaceBetween: 30,  //間距
        centeredSlides: true, //重最旁邊開始
        initalSlide: 3,   //從哪開始
        observer: true,   //重新計算
        speed: 500,     //滑動速度
        autoplay: {
          delay: 500, 
          disableOnInteraction: false,
        }, 
        loop: true,  //重複
        //顯示第幾張圖 小點點
        pagination: {
          el: '.swiper-pagination',
        },
        //上一頁 下一頁
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    imgLength(){
      return this.imgList.length
    }
  },
  methods: {
    onSwiper() {
      // console.log(this.swiper)
      // alert(this.swiper)
      // alert("test")
    },
    onSlideChange() {
      //換背景
      let current = this.swiper.activeIndex - 3
      if(current == 0 || current >=  this.imgLength){
        this.currentImgIndex = 0
      }else{
        this.currentImgIndex = current
      }
      if(current < 0){
        // this.swiper.activeIndex = this.imgLength + 2
        this.currentImgIndex = this.imgLength - 1
      }

      // console.log("index: "+this.currentImgIndex);
      // console.log("swiper index: "+this.swiper.activeIndex);
      
      this.changeVuexImg()
    },
    imgLoad(){
      //使用防抖函數
      debounce(this.changeVuexImg, 500)
    },
    changeVuexImg(){
      this.$store.commit('changeImgUrl', this.imgList[this.currentImgIndex])
    },
    clickimg(){
      // console.log('click');
    },
    autoPlay(){
      this.swiper.autoplay.start()
    },
    stopPlay(){
      this.swiper.autoplay.stop()
    }

  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)

    getImg("snow",5).then(res => {
      res.hits.forEach( item => {
        this.imgList.push(item.largeImageURL)
      })
    })
  }
};
</script>

<style lang="scss" scoped>
@function pxToVw($px){
  @return $px * 100 / 1366 + vw;
}

.con-swiper{
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  .wrap-swiper{
    width: 100%;
    height: 100vh;
    background-color: rgba(56, 95, 145, 0.4);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: space-around;
    
    .swiper-pagination{
      padding-top: 30px;
      width: 80px;
      display: flex;
      justify-content: space-evenly;
    }

    .swiper-text{
      font-size: pxToVw(60);
      font-weight: 800;
      height: 100px;
      position: relative;
      top: 30%;
      color: rgb(56, 47, 107);
      // border: 2px solid black;
      .autopaly{
        border-radius: 10px;
        color: #fff;
        background-color: rgba(120, 120, 190, 0.6);
        cursor: pointer;
        margin: 5px 20px;
        @media screen and (max-width: 600px) {
          font-size: pxToVw(50);
        }
        @media screen and (min-width: 601px) {
          font-size: pxToVw(40);
        }
      }
    }

    .swiper-container{
      // border: 2px solid black;
      padding-bottom: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      
      @media screen and (max-width: 600px) {
        width: pxToVw(1300);
        height: pxToVw(750);
      }
      @media screen and (min-width: 601px) {
        width: pxToVw(1100);
        height: pxToVw(250);
      }

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
