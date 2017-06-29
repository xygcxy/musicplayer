<template>
<div>
  <div class="library">
      <div class="banner">
      <swiper loop auto :list="demo01_list"  dots-position="center"></swiper>
      </div>
      <div class="lib-content">
          <div class="lib-section">
                  <div class="icon-left">
                      <a href="/singer">
                        <img src="../assets/icons/singer.png" alt="">
                        <span>歌手</span>
                      </a>
                  </div>
                  <div class="icon-m">
                      <a href="/top">
                        <img src="../assets/icons/paihang.png" alt="">
                        <span>排行</span>
                      </a>
                  </div>
                  <div class="icon-right icon-s">
                      <a href="/radio">
                        <img src="../assets/icons/diantai.png" alt="">
                        <span>电台</span>
                      </a>
                  </div>
              </div>
              <div class="lib-section">
                  <div class="icon-left">
                      <a href="/song-album">
                        <img src="../assets/icons/fenlei.png" alt="">
                        <span>分类歌单</span>
                      </a>
                  </div>
                  <div class="icon-m">
                      <a href="/mv">
                        <img src="../assets/icons/shipingMV.png" alt="">
                        <span>视频MV</span>
                      </a>
                  </div>
                  <div class="icon-right">
                      <a href="/album">
                        <img src="../assets/icons/zhuanji.png" alt="">
                        <span>数字专辑</span>
                      </a>
                  </div>
              </div>
      </div>
      <div class="hot-recommend">
        <span>热门推荐</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
        </div>
      </div>
      <div class="song-recommend">
        <span>每日为你推荐·30首</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <span>每周新歌: 周笔畅用声音温暖时光</span>
            </a>
            </div>
        </div>
      </div>
      <div class="song-new">
        <span>新歌速递</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
        </div>
      </div>
      <div class="select-radio">
        <span>精选电台</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="radio-type"></div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
        </div>
      </div>
      <div class="special">
        <span>专栏</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="sp-detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="sp-detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
        </div>
      </div>
      <div class="rec-singer">
        <span>乐人</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
            <div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <p>每周新歌: 周笔畅用声音温暖时光</p>
            </a>
            </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
}]
export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  ready () {
  },
  data () {
    return {
      demo01_list: baseList,
    }
  }
}
</script>

<style lang="scss">
.banner {
    margin-top: 6.03rem;
}
.lib-content {
        margin-top: 1.8rem;
}
.lib-section {
    display: flex;
    text-align: center;
    margin-bottom: 2rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.rec-singer {
    padding-bottom: 4rem;
}
.lib-section {
    img {
            width: 2.2rem;
            height: 2.2rem;
            vertical-align: middle;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    span {
        vertical-align: middle;
        font-size: 0.8rem;
    }
}
.lib-section .icon-left {
        position: absolute;
        left: 1rem;
        
        
}
.icon-right {
    position: absolute;
    right: 1rem;
}
.icon-s {
    right: 2.5rem;
}
.hot-recommend {
    span {

    }
}
.album-content {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
}
.detail {

    img {
        width: 7.76rem;
        height: 7.76rem;
    }
    p {
        padding-left: 0.5rem;
        font-size: 0.5rem;
        width: 7.2rem;
        text-align: left;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    
}
.sp-detail {
    img {
        width: 11.7rem;
        height: 5rem;
    }
    p {
        padding-left: 0.5rem;
        font-size: 0.5rem;
        width: 11.2rem;
        text-align: left;
    }
    a {
        text-decoration: none;
        color: #000;
    }
}
</style>


