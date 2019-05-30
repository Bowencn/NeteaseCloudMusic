<template>
    <div class="all-list">
        <div class="title">
            <ul>
                <li class="music-title"><p>音乐标题</p></li>
                <li class="singer"><p>歌手</p></li>
                <li class="album"><p>专辑</p></li>
                <li class="time"><p>时长</p></li>
            </ul>
        </div>
        <div class="list"> 
            <ul>
                <li>
                    <p class="song-num">{{num}}</p>
                    <i class="song-like"></i>
                    <i class="song-down"></i>
                    <p class="song-name">这个年纪</p>
                    <p class="song-singer">七一</p>
                    <p class="song-album">这个年纪</p>
                    <p class="song-time">04:44</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import api from '@/api/api.js'
export default {
    data () {
        return {
            num:'01',
            playlist:[]
        }
    },
    mounted() {
        this.getLikemusic()
    },
    methods: {
        getLikemusic(){
            api.getMyLikeMusic().then(res=>{
                // console.log(res.data.playlist.trackIds[0].id);
                this.playlist = (res.data.playlist.trackIds)
                // console.log(this.playlist);
                for (let index = 0; index < this.playlist.length; index++) {
                    const element = this.playlist[index].id;
                    // console.log(element);
                    this.getMusic(element)
                }
            })

        },
        getMusic(id){
            api.getMusic(id).then(res=>{
                console.log(res);
                
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .all-list{
        width: 100%;
        height: 100%;
        z-index: 99;
        .title{
            ul{
                display: flex;
                flex-direction: row;
                margin-left: 115px;
                margin-right: 5px;
                li{
                    height: 35px;
                    line-height: 35px;
                    p{
                        display: inline-block;
                        color: #929191;
                    }
                    
                }
                .music-title{
                    width: 290px;
                }
                .singer{
                    width: 135px;
                    
                }
                .album{
                    width: 185px;
                }
                .time{
                    width: 35px;
                }
            }
        }
        .list{
            width: 100%;
            height: 100%;
            ul{
                display: flex;
                flex-direction: column;
                li{
                    display: flex;
                    flex-direction: row;
                    padding-left: 30px;
                    height: 35px;
                    line-height: 35px;
                    font-size: 12px;
                    .song-num{
                        display: inline-block;
                        width: 15px;
                        margin-right: 15px;
                        color: #8a8a8a;
                    }
                    i{
                        width: 16px;
                        height: 16px;
                        margin-right: 10px;
                        background-size: cover;
                        margin-top:8px; 
                    }
                    .song-down{
                        background-image: url("../../../assets/xiazai.svg");
                    }
                    .song-like{
                        background-image: url("../../../assets/like1.svg");
                    }
                    .song-name{
                        width: 290px;
                        padding-left: 5px;
                        color: #000;
                    }
                    .song-singer{
                        width: 135px;
                        color: #636363;
                    }
                    .song-album{
                        width: 185px;
                        color:#636363;
                    }
                    .song-time{
                        width: 35px;
                        color: #b8b8b8;
                    }
                }
            }
        }
    }
</style>
