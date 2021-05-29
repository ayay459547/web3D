<template>
  <div id="app">
    <three-d>
      <keep-alive exclude="Focus">
        <router-view></router-view>
      </keep-alive>
    </three-d>
  </div>
</template>

<script>
import ThreeD from "./components/ThreeD"

export default {
  name: "App",
  components:{
    ThreeD
  }  
}
</script>

<style lang="scss">
@import "./assets/css/normalize.css";
// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

</style>
