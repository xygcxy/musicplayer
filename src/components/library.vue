<template>
<div>
    <div class="loading" v-show="loading"><img src="../assets/icons/loading.gif" alt=""></div>
  <div class="library">
      <div class="banner">
      <swiper loop auto :list="focuslist"  dots-position="center" :interval="interval" :aspect-ratio="aspectratio"></swiper>
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
        <span class="rec-title">热门推荐</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="detail" v-for="item in hotlist" :key="item.id">
                <a :href="item.url">
                <img :src="item.imgurl" alt=""><span>{{item.num}}</span>
                 <p>{{item.title}}</p>
                </a>
            </div>
        </div>
      </div>
      <div class="song-recommend">
        <span class="rec-title">每日为你推荐·30首</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <!--<div class="detail">
                <a href="">
                <img src="http://img5.duitang.com/uploads/item/201410/24/20141024224232_BAL24.thumb.700_0.jpeg" alt="">
                 <span>每周新歌: 周笔畅用声音温暖时光</span>
            </a>
            </div>-->
        </div>
      </div>
      <div class="song-new">
        <span class="rec-title">新歌速递</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="detail">
                <a href="/newsong">
                <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002214db2ALiIG.jpg" alt="">
                 <p>I - 鹿晗</p>
            </a>
            </div>
            <div class="detail">
                <a href="/albumsong">
                <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000001okwKr2HGL0h.jpg" alt="">
                 <p>还来得及 - 黄子韬</p>
            </a>
            </div>
            <div class="detail">
                <a href="/tvsong">
                <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M0000015c9jK2iSNVA.jpg" alt="">
                 <p>楚乔传 电视剧原声带</p>
            </a>
            </div>
        </div>
      </div>
      <div class="select-radio">
        <span class="rec-title">精选电台</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="radio-type"></div>
            <!--<div class="detail">
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
            </div>-->
        </div>
      </div>
      <div class="special">
        <span class="rec-title">MV</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="sp-detail" v-for="item in mvlist" :key="item.id">
                <a :href="item.url">
                <img :src="item.imgurl" alt="">
                 <p>{{item.title}}</p>
                 <p class="small">{{item.subtitle}}</p>
                </a>
            </div>
        </div>
      </div>
      <div class="rec-singer">
        <span class="rec-title">乐人</span>
        <i class="icon-rec"></i>
        <div class="album-content">
            <div class="detail" v-for="item in newsongreclist" :key="item.id">
                <a :href="item.url">
                <img :src="item.imgurl" alt="">
                 <p>{{item.title}}</p>
                </a>
            </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
export default {
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  },
  created () {
    this.librequest()
  },
  data () {
    return {
      focuslist: [],
      hotlist: '',
      mvlist: '',
      newsongreclist: '',
      loading: false,
      interval: 8000,
      aspectratio: 0.38
    }
  },
  methods: {
      librequest() {
        this.loading = true;
        this.Axios.get('http://localhost:3001/api/homedata')
            .then(res => {
                if (res.status == 200) {
                    //焦点图
                    this.focuslist = res.data.data.recdata.data.focus.map((item, index) => ({
                        url: item.jumpurl ? item.jumpurl : item.type == 3002 ?'https://y.qq.com/n/yqq/album/'+ item.id + '.html' : item.type == 10012 ? 'https://y.qq.com/n/yqq/mv/v/' + item.id + '.html' : item.type == 10002 ? 'https://y.qq.com/n/yqq/album/' + item.id + '.html' : '',
                        img: item.pic,
                    }));
                    //热门推荐
                    this.hotlist = res.data.data.recdata.data.hotdiss.list.slice(0,6).map((item, index) => ({
                        url: 'https://y.qq.com/n/yqq/playlist/' + item.dissid + '.html',
                        imgurl: item.imgurl,
                        title: item.dissname,
                        num: this.shorten(item.listennum)
                    }));
                    //MV
                    this.mvlist = res.data.data.recdata.data.shoubomv.all.slice(0, 4).map((item, index) => ({
                        url: 'https://y.qq.com/n/yqq/mv/v/' + item.vid + '.html',
                        imgurl: item.picurl,
                        title: item.mvtitle,
                        subtitle: item.mvdesc,
                        num: this.shorten(item.listennum)
                    }));
                    //排行榜
                    this.toplist = res.data.data.recdata.data.toplist;
                    //最新专辑（名人）
                    this.newsongreclist = res.data.data.newsongrec.data.album.all.slice(0, 3).map((item, index) => ({
                        url: 'https://y.qq.com/n/yqq/album/'+ item.Falbum_mid + '.html',
                        imgurl: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + item.Falbum_mid + '.jpg',
                        title: item.Falbum_name
                    }))
                    
                }
                this.loading = false;
            })
            .catch(function(err){
                console.log(err);
        });
      }
  }
}
</script>

<style lang="scss">
.loading {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #f4f4f4;
    img {
        position: fixed;
        top: 45%;
        left: 30%;
    }
}
.loading.sider-enter-active,
.loading.sider-leave-active {
  transition: all 0.5s;
}
.loading.sider-enter,
.loading.sider-leave-active {
  transform: translate3d(-100%, 0, 0);
}
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
.rec-title {
    font-size: 1.1rem;
}
.album-content {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
}
.detail {
    width:33%;
    height: 33%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    p {
        padding-left: 0.5rem;
        font-size: 0.5rem;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    span {
        position: absolute;
        left: 0.1rem;
        bottom: 3.7rem;
        color: #eee;
        font-size: 0.5rem;
    }
    
}
.sp-detail {
    width: 49.8%;
    height: 100%;
    img {
        width: 100%;
        height: 66%;
    }
    p {
        padding-left: 0.5rem;
        font-size: 0.5rem;
        text-align: left;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    .small {
        color: #868484;
        margin-top: -10px;
    }
}
</style>


