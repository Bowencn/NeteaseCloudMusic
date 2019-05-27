<template>
    <div class="songlist">
        <div class="main-title">
            <img src="../../assets/01.jpg" class="main-img">
            <div class="right">
                <div class="title">
                    <i></i>
                    <p>{{name}}</p>
                </div>
                <div class="user-info">
                    <img src="" class="user-img">
                    <div class="mask-layer"></div>
                    <p class="user-name">{{userName}}</p>
                    <p>{{creationTime}}创建</p>
                </div>
                <div class="btn">
                    <ul>
                        <li>
                            <i></i>
                            <p>播放全部</p>
                            <i></i>
                        </li>
                        <li>
                            <i></i>
                            <p>收藏</p>
                            <p>({{collNum}})</p>
                        </li>
                        <li>
                            <i></i>
                            <p>分享</p>
                            <p>({{shareNum}})</p>
                        </li>
                        <li>
                            <i></i>
                            <p>下载全部</p>
                        </li>
                    </ul>
                </div>
                <div class="other-info">
                    <p>歌曲數:{{songNum}}</p>
                    <p>播放數:{{playNum}}</p>
                </div>
            </div>
        </div>
        <div class="list-main"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            name:'我喜欢的的音乐',
            userName:'bw_uio',
            creationTime:'2015-09-22',
            collNum:'0',
            shareNum:'0',
            songNum:'1044',
            playNum:'1519'
        }
    }
}
</script>
<style lang="scss" scoped>
    .songlist{
        width: 100%;
        height: 100%;
        .main-title{
            height: 40%;
            width: 100%;
            position: relative;
            .main-img{
                width: 200px;
                height: 200px;
                margin-left: 30px;
                margin-top: 24px;
                border-radius: 10px;
            }
            .mask-layer{
                position: absolute;
                width: 200px;
                height: 200px;
                top: 24px;
                background: #000;
                opacity: 0.6;
                left: 30px;
                border-radius: 10px;
            }
        }
        .list-main{}
    }
</style>
