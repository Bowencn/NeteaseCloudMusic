<template>
    <div class="songlist">
        <div class="main-title">
            <img src="../../assets/01.jpg" class="main-img">
            <div class="mask-layer"></div>
            <div class="right">
                <div class="title">
                    <i></i>
                    <h2>{{name}}</h2>
                </div>
                <div class="user-info">
                    <img src="../../assets/01.jpg" class="user-img">
                    <p class="user-name">{{userName}}</p>
                    <p>{{creationTime}}创建</p>
                </div>
                <div class="btn">
                    <ul>
                        <li class="btn-all">
                            <i class="play"></i>
                            <p>播放全部</p>
                            <i class="add"></i>
                        </li>
                        <li class="btn-coll miss">
                            <i></i>
                            <p>收藏</p>
                            <p>({{collNum}})</p>
                        </li>
                        <li class="btn-share">
                            <i></i>
                            <p>分享</p>
                            <p>({{shareNum}})</p>
                        </li>
                        <li class="btn-down">
                            <i></i>
                            <p>下载全部</p>
                        </li>
                    </ul>
                </div>
                <div class="other-info">
                    <p>歌曲數: {{songNum}}</p>
                    <p>播放數: {{playNum}}</p>
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
            display: flex;
            flex-direction: row;
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
                background-image: url('../../assets/心.svg');
                background-size:170px;
                background-position: 15px 20px;
            }
            .right{
                margin-left: 30px;
                margin-top: 24px;
                width: 100%;
                .title{
                    display: flex;
                    flex-direction: row;
                    i{
                        background-image: url('../../assets/这是一个歌单.svg');
                        background-size: cover;
                        width: 34px;
                        height: 29px;
                        display: inline-block;
                    }
                    h2{
                        font-size: 22px;
                        margin-left: 10px;
                        margin-top: 5px;
                    }
                }
                .user-info{
                    display: flex;
                    margin-top: 18px;
                    .user-img{
                        width: 25px;
                        height: 25px;
                        border-radius: 90px;
                    }
                    .user-name{
                        color: rgb(37, 93, 156);
                    }
                    p{
                        font-size: 12px;
                        margin-left: 10px;
                        line-height: 25px;
                        color: rgb(133, 133, 133);
                    }
                }
                .btn{
                    margin-top: 22px;
                    width: 100%;
                    ul{
                        display: flex;
                        flex-direction: row;
                        li{
                            // padding: 5px;
                            border: 1px solid #cdcdcd;
                            border-radius: 45px;
                            text-align: center;
                            line-height: 30px;
                            padding: 0px 20px;
                            margin-right: 10px;
                            i,p{
                                display: inline-block;
                            }
                        }
                        .btn-all{
                            // width: 140px;
                            padding: 0 30px 0 40px;
                            background-color: #f596aa;
                            color: #fff;
                            font-size: 14px;
                            position: relative;
                            p{
                                border-right: 1px solid #ccc;
                                padding-right: 10px;
                            }
                            .play{
                                background-image: url('../../assets/播放全部.svg');
                                width: 20px;
                                height: 20px;
                                background-size: cover;
                                position: absolute;
                                left: 15px;
                                top: 5px;
                            }
                            .add{
                                background-image: url('../../assets/jia.svg');
                                width: 15px;
                                height: 15px;
                                background-size: cover;
                                position: absolute;
                                right: 10px;
                                top: 7px;
                            }
                        }
                        .miss{
                            color: #acacac
                        }
                        .btn-coll{
                            position: relative;
                            padding-left:40px; 
                            i{
                                background-image: url('../../assets/收藏夹.svg');
                                width: 20px;
                                height: 20px;
                                background-size: cover;
                                position: absolute;
                                left: 15px;
                                top: 4px;
                            }
                        }
                        .btn-share{
                            position: relative;
                            padding-left: 40px;
                            i{
                                background-image: url('../../assets/分享.svg');
                                width: 20px;
                                height: 20px;
                                background-size: cover;
                                position: absolute;
                                left: 15px;
                                top: 6px;
                            }
                        }
                        .btn-down{
                            position: relative;
                            padding-left: 40px;
                            i{
                                background-image: url('../../assets/xiazai.svg');
                                width: 20px;
                                height: 20px;
                                background-size: cover;
                                position: absolute;
                                left: 15px;
                                top: 6px;
                            }
                        }
                    }
                }
                .other-info{
                    margin-top: 22px;
                    display: flex;
                    p{
                        margin-right: 10px;
                    }
                }
            }
        }
        .list-main{}
    }
</style>
