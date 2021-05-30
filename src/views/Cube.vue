<template>
  <div class="cube" :style="{backgroundImage: `url( ${imgList[6]} )`}">
    <div class="cube-wraper">
      <div class="wrap">
        <div class="box in-font"><img :src="imgList[0]" alt=""></div>
        <div class="box in-back"><img :src="imgList[1]" alt=""></div>
        <div class="box in-left"><img :src="imgList[2]" alt=""></div>
        <div class="box in-right"><img :src="imgList[3]" alt=""></div>
        <div class="box in-top"><img :src="imgList[4]" alt=""></div>
        <div class="box in-bottom"><img :src="imgList[5]" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import {getImg} from '../network/getImg'
// import axios from 'axios'
// import {apikey} from '../common/utils'

export default {
  name: "Cube",
  data(){
    return {
      imgList: []
    }
  },
  mounted(){
    getImg("food",7).then(res => {
      res.hits.forEach( item => {
        this.imgList.push(item.largeImageURL)
      })
    })

    //沒有封裝的請求
    // axios({
    //   url:"https://pixabay.com/api/",
    //   params:{
    //     key: apikey,
    //     q: 'food',
    //     per_page: 6
    //   }
    // }).then(res => {
    //   res.data.hits.forEach( item => {
    //     this.imgList.push(item.largeImageURL)
    //   })
    // })
  }
}
</script>

<style lang="scss" scoped>

.cube{
  width: 100%;
  height: 100vh;
  background-color: #a03434;
  background-repeat: no-repeat;
  background-size: cover;

  .cube-wraper{
    width: 100%;
    height: 100vh;
    background-color: #a034349f;
  }
  .wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 500px;
    width: 500px;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -250px ;
    transform: rotateX(-40deg) rotateY(0deg) rotateZ(-40deg);
    transform-style: preserve-3d;
    animation: cub 10s linear infinite;

    &:hover .box{
      background-color: #ffffff89;
      width: 400px;
      height: 400px;
      
      &.in-font{
        transform: translateZ(300px);
      }
      &.in-back{
        transform: translateZ(-300px);
      }
      &.in-left{
        transform: rotateY(90deg) translateZ(300px);
      }
      &.in-right{
        transform: rotateY(-90deg) translateZ(300px);
      }
      &.in-top{
        transform: rotateX(90deg) translateZ(300px);
      }
      &.in-bottom{
        transform: rotateX(-90deg) translateZ(300px);
      }
    }

    .box{
      box-sizing: border-box;
      position: absolute;
      width: 300px;
      height: 300px;
      background-color: #a8656589;
      border: 3px solid black;
      transition: all 0.5s;
      overflow: hidden;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &.in-font{
        transform: translateZ(150px);
      }
      &.in-back{
        transform: translateZ(-150px);
      }
      &.in-left{
        transform: rotateY(90deg) translateZ(150px);
      }
      &.in-right{
        transform: rotateY(-90deg) translateZ(150px);
      }
      &.in-top{
        transform: rotateX(90deg) translateZ(150px);
      }
      &.in-bottom{
        transform: rotateX(-90deg) translateZ(150px);
      }
    }
  }
}

@keyframes cub{
  0%{
    transform: rotateX(-40deg) rotateY(0deg) rotateZ(-40deg);
  }
  100%{
    transform: rotateX(-40deg) rotateY(360deg) rotateZ(-40deg);
  }
}
</style>
