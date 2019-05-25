<template>
    <div class="song-list">
        <div class="user"></div>
        <div class="list">
            <ul class="features">
                <li class="find active">
                    <i></i>
                    <p>发现音乐</p>
                </li>
                <li class="fm">
                    <i></i>
                    <p>私人FM</p>
                </li>
                <li class="video">
                    <i></i>
                    <p>视频</p>
                </li>
                <li class="friend">
                    <i></i>
                    <p>朋友</p>
                </li>
            </ul>
            <ul class="my">
                <div>我的音乐</div>
                <li class="down">
                    <i></i>
                    <p>下载管理</p>
                </li>
                <li class="yun">
                    <i></i>
                    <p>我的音乐云盘</p>
                </li>
                <li class="radio">
                    <i></i>
                    <p>我的电台</p>
                </li>
                <li class="coll">
                    <i></i>
                    <p>我的收藏</p>
                </li>
            </ul>
            <ul class="new">
                <div>创建的歌单</div>
                <ul>
                    <li class="myLike"></li>
                    <li></li>
                </ul>
            </ul>
            <ul class="collection">
                <div>收藏的歌单</div>
                <ul>
                    <li></li>
                </ul>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .song-list{
        width: 200px;
        height: 100%;
        border-right: 1px solid rgb(230, 230, 230);
        .user{
            width: 100%;
            border-bottom:1px solid black;
            height: 88px;
        }
        .list{
            .features{
                width: 100%;
                height: 150px;
                border-bottom: 1px solid black;
                display: flex;
                flex-direction: column;
                li{
                    flex-grow: 1;
                    padding-top: 10px;
                    font-size: 13px;
                    display: inline-block;
                    position: relative;
                    border-left: 3px solid #fff;
                    i{
                        position: absolute;
                        left: 20px;
                    }
                    p{
                        display: inline-block;
                        line-height: 20px;
                        margin-left: 45px;
                        font-weight: 500;
                    }
                }
                .find{
                    i{
                        display: inline-block;
                        background-image: url('../assets/发现.svg');
                        background-size: cover;
                        width: 18px;
                        height: 16px;
                    }
                }
                .fm{
                    i{
                        display: inline-block;
                        background-image: url('../assets/FM2.svg');
                        background-size: cover;
                        width: 18px;
                        height: 16px;
                    }
                }
                .video{
                    i{
                        display: inline-block;
                        background-image: url('../assets/视频 (2).svg');
                        background-size: cover;
                        width: 18px;
                        height: 16px;
                        // margin-top: 2px;
                        // margin-left: -2px;
                    }
                }
                .friend{
                    i{
                        display: inline-block;
                        background-image: url('../assets/朋友.svg');
                        background-size: cover;
                        width: 18px;
                        height: 16px;
                    }
                }
                .active{
                    color: rgb(245, 150, 170);
                    border-left: 3px solid rgb(245, 150, 170);
                    i{
                        background-image: url('../assets/发现的副本.svg')
                    }
                }
            }
            .my{
                width: 100%;
                height: 220px;
                border-bottom: 1px solid black;
                position: relative;
                font-size: 13px;
                display: inline-block;
                li{
                    i{
                        position: absolute;
                        left: 20px;
                    }
                    p{
                        display: inline-block;
                        line-height: 20px;
                        margin-left: 45px;
                        font-weight: 500;
                    }
                }
                div{
                    font-size: 12px;
                    color: rgb(141, 141, 141);
                    padding-top: 10px;
                    padding-left: 20px;
                    padding-bottom: 10px;
                }
                .down{
                    i{
                        background-image: url('../assets/xiazai.svg');
                        background-size: cover;
                        background-size: cover;
                        width: 18px;
                        height: 16px;
                    }
                }
            }
        }
    }
</style>
