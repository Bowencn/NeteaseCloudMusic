<template>
  <div id="app">
    <div class="main">
      <Sidebar></Sidebar>
      <!-- <keep-alive> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    </div>
    <playbar></playbar>
  </div>
</template>

<script>
import playbar from './components/playBar'
import Sidebar from './components/Sidebar'
  export default {
    name: 'neteasecloudmusic',
    data(){
      return{
        singer:'郁可唯',
        allTime:'01:20'
      }
    },
    components:{
      playbar : playbar,
      Sidebar : Sidebar
    },
    methods:{
      a:function(){
        // console.log(this);
        
      }
    },
    mounted(){
      this.a()
    }
  }
</script>

<style lang="scss" scoped>
@import url('./assets/reset.css');
@import url('./assets/global.css');
  #app{
    width: 100%;
    position: relative;
    min-width: 1003px;
    height: 100%;
    .main{
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      .song-list{
        
      }
    }
    .play-bar{
      position: absolute;
      bottom: 0;
    }
  }
</style>

