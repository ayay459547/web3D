<template>
  <div class="forest-container">
    <video class="con-video" src="../assets/video/forest.mp4" autoplay muted loop></video>
      <div class="wrapper">
        <div class="card">
          <video class="card-video" src="../assets/video/forest.mp4" autoplay muted loop></video>
          <div class="title">
            <p>FOREST</p>
          </div>
        </div>  
    </div>
  </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt'

export default {
  name: "Forest",
  mounted() {
    VanillaTilt.init(document.querySelector(".card"), {
		max: 25,
		speed: 400,
    });
    
    //It also supports NodeList
    // VanillaTilt.init(document.querySelectorAll(".card"));
  },
}
</script>

<style lang="scss" scope>
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
      width: 250px;
      height: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transition: all 0.1s;

      &:hover{
        width: 300px;
        height: 500px;

        video{
          width: 300px;
          height: 500px;
        }
      }

      .card-video{
        width: 250px;
        height: 450px;
        object-fit: cover;
        position: absolute;
      }
      .title{
        transform: rotate(270deg);
        letter-spacing: 10px;
        font-size: 90px;
        font-weight: 900;
        color: #fff;
      }
      
      
    }
  }
}
</style>
