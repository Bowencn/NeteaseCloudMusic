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
                <li v-for="item in playlist" :key="item.id">
                    <p class="song-num">{{playlist.length}}</p>
                    <i class="song-like"></i>
                    <i class="song-down"></i>
                    <p class="song-name" >{{item.name}}</p>
                    <p class="song-singer">{{item.ar[0].name}}</p>
                    <p class="song-album">{{item.al.name}}</p>
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
            listwait:[],
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
                let playwait = (res.data.playlist.trackIds)
                // console.log(this.playwait);
                for (let index = 0; index < 10; index++) {
                    const element = playwait[index].id;
                    // console.log(element);
                    this.listwait.push(element)
                    this.getMusic(this.listwait[index])
                }
                console.log(this.listwait);
                
                
            })

        },
        getMusic(id){
            api.getMusic(id).then(res=>{
                // console.log(res.data.songs[0]);
                this.playlist.push(res.data.songs[0])
                console.log(this.playlist);
                
                // this.getPlay()
            })
        },
        getPlay(id){
            console.log(this.playlist);
            
            api.getPlay(id).then(res=>{
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
