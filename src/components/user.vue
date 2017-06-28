<template>
      <div class="user">
          <div class="login">
              <p>登录听歌，听得越多，推得越准</p>
              <div class="btn-login" type="">立即登录</div>
          </div>
          <div class="user-content">
              <div class="user-song">
                  <div class="songs">
                      <a href="/allmusic">
                        <img src="../assets/icons/yinfu.png" alt="">
                        <p>全部歌曲</p>
                      </a>
                  </div>
                  <div class="songs">
                      <a href="/allmusic">
                        <img src="../assets/icons/download.png" alt="">
                        <p>下载歌曲</p>
                      </a>
                  </div>
                  <div class="songs">
                      <a href="/allmusic">
                        <img src="../assets/icons/zuijin.png" alt="">
                        <p>最近播放</p>
                      </a>
                  </div>
              </div>
              <div class="user-song">
                  <div class="songs">
                      <a href="/allmusic">
                        <img src="../assets/icons/heart.png" alt="">
                        <p>我喜欢</p>
                      </a>
                  </div>
                  <div class="songs">
                      <a href="/allmusic">
                        <img src="../assets/icons/mv.png" alt="">
                        <p>下载MV</p>
                      </a>
                  </div>
                  <div class="songs">
                      <a href="/allmusic">
                        <img src="../assets/icons/cd.png" alt="">
                        <p>已购音乐</p>
                      </a>
                  </div>
              </div>
          </div>
          <div class="user-radio">
              <div class="personal-radio">
                  <img src="../assets/icons/run.jpg" alt="">
                  <div class="intr-radio">
                      <p>开启个性音乐电台</p>
                      <small>好音乐因你而在</small>
                  </div>
              </div>
              <div class="nike-radio">
                  <img src="../assets/icons/run1.jpg" alt="">
                  <div class="intr-radio">
                      <p>NIKE跑步电台</p>
                      <small>2017，乐享跑步</small>
                  </div>
              </div>
          </div>
          <div class="song-sheet">
              <span>自建歌单</span> | <span>收藏歌单</span>
          </div>
      </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
    .user {
        margin: 9rem 0 5rem 0;
    }
    .btn-login {
        border: 1px solid #31C37C;
        border-radius: 0.2rem;
        width: 8rem;
        color: #31C37C;
        line-height: 2.5rem;
        margin: 0 auto;
    }
    .user-content {
        margin-top: 1.8rem;
        border-bottom: 0.5rem solid #ebebeb;
    }
    .user-song {
        display: flex;
        text-align: center
    }
    .user-song .songs {
            flex: 1;
            img {
                width: 2.2rem;
                height: 2.2rem;
            }
            a {
                text-decoration: none;
                color: #000;
            }
    }
    .personal-radio {
        display: flex;
        padding-bottom: 0.2rem;
        img {
            width: 5rem;
            height: 5rem;
        }
        .intr-radio {
            border-bottom: 1px solid #ebebeb;
        }
    }
    .nike-radio {
        display: flex;
        border-bottom: 0.5rem solid #ebebeb;
        img {
            width: 5rem;
            height: 5rem;
        }
    }
    .intr-radio {
        margin-left: 1rem;
        text-align: left;
        width: 100%;
        small {
            color: darkgray;
        }
    }
    .song-sheet {
        margin: 1rem 0 1rem 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ebebeb;
    }
</style>

