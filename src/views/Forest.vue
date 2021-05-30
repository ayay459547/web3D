<template>
  <div class="forest-container">
    <video class="con-video" :src="videoUrl[1]" autoplay muted loop></video>
      <div class="wrapper">
        <div class="card">
          <video class="card-video" :src="videoUrl[1]" autoplay muted loop></video>
          <div class="title">
            <p>FOREST</p>
          </div>
        </div>  
    </div>
  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'
import {getVideo} from "../network/getVideo"

export default {
  name: "Forest",
  data(){
    return {
      videoUrl: []
    }
  },
  mounted() {
    getVideo("forest",3).then(res => {
      res.hits.forEach( item => {
        this.videoUrl.push(item.videos.medium.url)
      })
    })

    VanillaTilt.init(document.querySelector(".card"), {
		max: 25,
		speed: 400,
    });
    
    //It also supports NodeList
    // VanillaTilt.init(document.querySelectorAll(".card"));
  },
}
</script>

<style lang="scss" scoped>
@function pxToVw($px){
  @return $px * 100 / 1366 + vw;
}

.forest-container{
  width: 100%;
  height: 100vh;
  position: relative;

  .con-video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .wrapper{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(190deg, rgba(11, 141, 11, 0.4) 3%, rgba(59, 216, 56, 0.001) 97%);
    display: flex;
    justify-content: center;
    align-items: center;

    .card{
      width: pxToVw(400);
      height: pxToVw(800);
      max-height: 500px;
      max-width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: all 0.1s;

      &:hover{
        width: pxToVw(500);
        height: pxToVw(900);
        max-height: 600px;
        max-width: 400px;

        video{
          width: pxToVw(500);
          height: pxToVw(900);
        }
      }

      .card-video{
        width: pxToVw(400);
        height: pxToVw(800);
        object-fit: cover;
        position: absolute;
      }
      .title{
        transform: rotate(270deg);
        letter-spacing: 10px;
        font-size: pxToVw(90);
        font-weight: 900;
        color: #fff;
      }
      
      
    }
  }
}
</style>
