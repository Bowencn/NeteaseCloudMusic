<template>
  <div class="Sidebar">
    <div class="user">
      <img src="../assets/01.jpg">
      <p>{{name}}</p>
    </div>
    <div class="box">
      <div class="list">
        <ul class="features">
          <li class="find active" @click="go('home')">
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
          <div>歌单</div>
          <ul v-for="item in userData" :key="item.key">
            <li  @click="go('songList')">
              <i></i>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { log } from "util";
export default {
  data() {
    return {
      userData: "",
      user: {
        userNum: "",
        userPassWorld: ""
      },
      name: "bw_uio"
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:3000/user/playlist?uid=93556919")
      .then(res => {
        console.log(res);
        this.userData = res.data.playlist;
        // this.user = res.data.playlist.
      });
  },
  methods: {
    signin() {
      this.$http
        .get("http://localhost:3000/user/playlist?uid=93556919")
        .then(res => {
          console.log(res);
          this.userData = res.data.playlist;
          // this.user = res.data.playlist.
        });
    },
    go(src) {

        this.$router.push({
            path:src,
            // query:{
            //     id:
            // }
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.Sidebar{
  width: 200px;
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  .user {
    width: 100%;
    height: 88px;
    display: flex;
    flex-direction: row;
    img {
      width: 40px;
      height: 40px;
      border-radius: 90px;
      margin: auto 5px auto 10px;
    }

    p {
      text-align: center;
      display: inline-block;
      line-height: 40px;
      margin: auto 0;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .box {
    overflow: hidden;
    width: 180px;
    height: 77%;
    .list {
      overflow-y: scroll;
      overflow-x: hidden;
      width: 200px;
      height: 100%;
      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        div {
          font-size: 12px;
          color: rgb(141, 141, 141);
          padding-top: 10px;
          padding-left: 20px;
          padding-bottom: 10px;
        }
        li {
          cursor:default;
          flex-grow: 1;
          padding-top: 10px;
          padding-bottom: 7.5px;
          font-size: 13px;
          display: inline-block;
          position: relative;
          border-left: 3px solid #fff;
          i {
            position: absolute;
            left: 20px;
            width: 16px;
            height: 16px;
            background-size: cover;
          }
          p {
            display: inline-block;
            line-height: 20px;
            margin-left: 45px;
            font-weight: 500;
          }
        }
      }
      .features {
        .find {
          i {
            background-image: url("../assets/发现.svg");
          }
        }
        .fm {
          i {
            background-image: url("../assets/FM2.svg");
          }
        }
        .video {
          i {
            background-image: url("../assets/视频 (2).svg");
            height: 14px;
            // margin-left: -2px;
          }
        }
        .friend {
          i {
            background-image: url("../assets/朋友.svg");
          }
        }
        .active {
          color: rgb(245, 150, 170);
          border-left: 3px solid rgb(245, 150, 170);
          i {
            background-image: url("../assets/发现的副本.svg");
          }
        }
      }
      .my {
        .down {
          i {
            background-image: url("../assets/xiazai.svg");
          }
        }
        .yun {
          i {
            background-image: url("../assets/yunpan.svg");
          }
        }
        .radio {
          i {
            background-image: url("../assets/diantai.svg");
          }
        }
        .coll {
          i {
            background-image: url("../assets/shoucang.svg");
            height: 14px;
            margin-left: -1px;
          }
        }
      }
      .new {
        i {
          background-image: url("../assets/gedan.svg");
          margin-top: 2px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
