<template>
    <div class="play-bar">
      <div class="slider-bar">
        <span class="active-bar"></span>
      </div>
      <div class="content-bar">
        <div class="song-info">
          <div class="song-img"></div>
          <div class="song">
            <div class="song-title">
              <span>时间煮雨</span>
              <span class="singer"> - {{singer}}</span>
            </div>
            <div class="song-time">
              <span class="active-time">00:00</span>
              <span class="all-time">/ {{allTime}}</span>
            </div>
          </div>
        </div>
        <!-- <audio src="http://m10.music.126.net/20190525151756/7cd1d8ba336505e11766ea1b9eae82b9/ymusic/055d/065f/515d/272b5d606115f57d5942f79561148769.mp3" controls="controls"></audio> -->
        <div class="play-btn">
          <div class="btn btn-like">
            <i></i>
          </div>
          <div class="btn btn-Previous">
            <i></i>
          </div>
          <div class="btn btn-player" @click="play">
            <i class="player"></i>
          </div>
          <div class="btn btn-next">
            <i></i>
          </div>
          <div class="btn btn-share">
            <i></i>
          </div>
        </div>
        <div class="other-btn">
          <div class="btn-hb">
            <i></i>
          </div>
          <div class="btn-list">
            <i></i>
          </div>
          <div class="btn-lyrics">
            <i></i>
          </div>
          <div class="btn-volume">
            <i></i>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { log } from 'util';
export default {
    name:"playBar",
    data(){
      return{
        singer:'郁可唯',
        allTime:'01:20',
        // musicsrc : 'http://m10.music.126.net/20190525151756/7cd1d8ba336505e11766ea1b9eae82b9/ymusic/055d/065f/515d/272b5d606115f57d5942f79561148769.mp3'
      }
    },
    mounted(){
        this.control()
        // console.log(this);
        
    },
    methods:{
        control:function(){
            this.audio = new Audio();
            // let song = this.$http.get('http://localhost:3000/song/url?id=1349292048').then()
            // console.log(song);
            
        },
        play:function(){
            // this.audio.src = this.musicsrc
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .play-bar{
      width: 100%;
      height: 59px;
      // border-top: 2px solid #C2200C;
      .slider-bar{
        height: 2px;
        width: 100%;
        position: relative;
        background: rgb(128, 128, 128);
        .active-bar{
          position: absolute;
          background: #C2200C;
          height: 2px;
          width: 20%;
        }
      }
      .content-bar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // text-align: center;
        width: 100%;
        .song-info{
          flex-direction: row;
          flex-grow: 1;
          position: relative;
          .song-img{
            width: 39px;
            height: 39px;
            background-image: url("../assets/01.jpg");
            background-size:cover;
            margin: 10px 0 10px 10px;
            border-radius: 8px;
          }
          .song{
            position: absolute;
            top: 13px;
            left: 59px;
            line-height: 14px;
            font-size: 14px;
            .song-title{
              .singer{
                color: rgb(121, 121, 121);
                font-size: 12px;
                margin-left: 10px;
              }
            }
            .song-time{
              margin-top: 3px;
              color: rgb(155, 155, 155);
            }
          }
        }
        .play-btn{
          flex-grow: 1;
          display: flex;
          position: relative;
          .btn{
            position: absolute;
            top:50%;
            transform: translateY(-50%);
          }
          .btn-like{
            left: 25px;
            i{
              width: 17px;
              height: 17px;
              background-image: url("../assets/喜欢 (2).svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
          .btn-Previous{
            left: 75px;
            i{
              width: 20px;
              height: 20px;
              background-image: url("../assets/上一首 .svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
          .btn-player{
            left: 119px;
            i{
              width: 38px;
              height: 38px;
              background-image: url("../assets/播放.svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
          .btn-next{
            left: 178px;
            i{
              width: 20px;
              height: 20px;
              background-image: url("../assets/下一首.svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
          .btn-share{
            left: 230px;
            i{
              width: 17px;
              height: 17px;
              background-image: url("../assets/分享.svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
        }
        .other-btn{
          flex-grow: 1;
          display: flex;
          position: relative;
          div{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          .btn-hb{
            right: 125px;
            i{
              width: 30px;
              height: 30px;
              background-image: url("../assets/心动.svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
          .btn-list{
            right: 90px;
            i{
              width: 20px;
              height: 20px;
              background-image: url("../assets/播放列表.svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
          .btn-lyrics{
            right: 50px;
            i{
              width: 25px;
              height: 25px;
              background-image: url("../assets/歌词.svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
          .btn-volume{
            right: 20px;
            i{
              width: 20px;
              height: 20px;
              background-image: url("../assets/声音.svg");
              background-size: cover;
              display: block;
              margin-left: 1px;
            }
          }
        }
      }
    }
</style>
