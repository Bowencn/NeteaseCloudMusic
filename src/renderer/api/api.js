import http from 'axios'
// const userInfo = ;/playlist/detail?id=109341231
const Music = 'http://localhost:3000/song/detail?ids='
const myLikeMusic = 'http://localhost:3000/playlist/detail?id=109341231'
export default{
    getMyLikeMusic(){
        return http.get(myLikeMusic)
    },
    getMusic(id){
        return http.get(Music + id)
    }
}