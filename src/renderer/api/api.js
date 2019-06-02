import http from 'axios'
// const userInfo = ;/playlist/detail?id=109341231
const index = 'http://localhost:4000'
const Music = index + '/song/detail?ids='
const proxy = '&proxy=http://119.48.190.218:9999`'
const myLikeMusic = index + '/playlist/detail?id=109341231'
const play = index + '/song/url?id='
export default{
    getMyLikeMusic(){
        return http.get(myLikeMusic)
    },
    getMusic(id){
        return http.get(Music + id + proxy)
    },
    getPlay(id){
        return http.get(play + id)
    }
}