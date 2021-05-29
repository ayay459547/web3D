<template>
  <div class="con-swiper" :style="{backgroundImage: `url( ${imgList[currentImgIndex]} )`}">
    <div class="wrap-swiper">
      <div class="swiper-pagination"></div>
      <div class="swiper-text">這裡的圖片使用Vuex與Focus連動背景圖</div>
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
/// Import Swiper Vue.js components
import 'swiper/swiper-bundle.min.css'
// import 'swiper/dist/css/swiper.css'
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
// Import Swiper styles
SwiperCore.use([Navigation, Autoplay, EffectCoverflow, Pagination]); 

export default {
  data() {
    return {
      imgList: [],
      currentImgIndex: 0,
      swiperOptions: {
        effect: "coverflow",
        slidesPerView: 3,
        grabCursor:true,
        spaceBetween: 30,
        centeredSlides: true,
        initalSlide: 3,
        observer: true,
        speed: 500,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }
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
      let autoKey = true
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

      if(autoKey){
        // this.swiper.
        this.stopAuto()
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
    stopAuto(){
      if(this.currentImgIndex >= 2){
        this.swiper.autoplay.stop()
      }
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)

    getImg("snow",5).then(res => {
      res.hits.forEach( item => {
        this.imgList.push(item.largeImageURL)
        // console.log(item.largeImageURL)
      })
    })
  }
};
</script>

<style lang="scss" scoped>
.con-swiper{
  width: 100%;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  .wrap-swiper{
    width: 100%;
    height: 100vh;
    background-color: rgba(56, 95, 145, 0.6);
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
      font-size: 40px;
      font-weight: 800;
      height: 100px;
      position: relative;
      top: 30%;
      color: rgb(56, 47, 107);
      // border: 2px solid black;
    }

    .swiper-container{
      width: 80%;
      height: 200px;
      // border: 2px solid black;
      padding-bottom: 50px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
