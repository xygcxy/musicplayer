<template>
<div>
        <div class="header" :class="{'showheader': isshow }" v-show="showheader">
            <div class="top">
                <div class="left-icon">
                    <img src="../assets/icons/xian.png" @click="toggleSiderbar">
                </div>
                <div class="top-content">
                    <router-link to="/index" active-class="link-active">
                    <span>我的</span>
                    </router-link>
                    <router-link to="/library" active-class="link-active">
                    <span>音乐馆</span>
                    </router-link>
                    <router-link to="/seek" active-class="link-active">
                    <span>发现</span>
                    </router-link>
                </div>
                <div class="right-icon">
                    <img src="../assets/icons/shiqu.png">
                </div>
                    <transition name="sider">
                        <div class="siderbar" v-show="showsider">
                            <div class="siderbar-header">
                                <div class="l-sidebar-header">
                                <img src="../assets/icons/vip.png">
                                <p class="intr">升级为VIP</p>
                                <small>畅享音乐特权</small>
                                </div>
                                <div class="m-sidebar-header">
                                <img src="../assets/icons/zhuti.png">
                                <p class="intr">个性化中心</p>
                                <small>点击查看中心</small>
                                </div>
                                <div class="r-sidebar-header">
                                <img src="../assets/icons/message.png">
                                <p class="intr">消息中心</p>
                                </div>
                            </div>
                            <div class="siderbar-content">
                                <p>仅Wi-Fi联网</p>
                                <p>定时关闭</p>
                                <p>免流量服务</p>
                                <p>传歌到手机</p>
                                <p>QPlay与车载音乐</p>
                                <p>清理占用空间</p>
                                <p>帮助与反馈</p>
                                <p>关于QQ音乐</p>  
                            </div>
                            <div class="siderbar-footer">
                                <div class="l-sidebar-bottom">
                                <img src="../assets/icons/shezhi.png">
                                <span>设置</span>
                                </div>
                                <div class="r-sidebar-bottom">
                                    <img src="../assets/icons/tuichu.png">
                                    <span>退出QQ登录</span>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <transition name="sider">
                        <div class="mask" v-show="showsider" @click="toggleSiderbar"></div>
                    </transition>
            </div>
            <div class="search-banner">
                <div class="search-input">
                    <router-link to="/search">
                    <i class="return-icon" @click="returnheader"></i>
                    <div class="home-search" @click="isshowheader"> 
                        <input type="text" class="default-input" :class="{'inputsearch': isshow }" :placeholder="searchname" :value="searchkey" v-model="searchitem" @keyup.enter="search()">
                        <a @click="search()" class="btn-search">搜索</a>
                    <i class="search-icon" v-show="showsearchicon"></i></div>
                    </router-link>
                </div>
            </div>
        </div>
        <!--<v-user></v-user>-->
        <!--<router-view></router-view>
        <v-footer></v-footer>-->
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
// import user from '@/components/user'
// import footer from '@/components/footer'
export default {
  data () {
    return {
        showsider: false,
        isshow: false,
        issider: false,
        showsearchicon: true,
        searchname: '搜索',
        searchitem: '',
        page: 1,
        // searchkey: '',
    }
  },
  components: {
    // 'v-user': user,
    // 'v-footer': footer
  },
  mounted () {
        // window.addEventListener('scroll', this.throttle(this.loadMore));
    },
  methods: {
      toggleSiderbar () {
          this.showsider = !this.showsider;
      },
      isshowheader () {
          this.isshow = 'ture';
          this.showsearchicon = false;
          this.searchname = '搜索音乐、歌词、歌单';
      },
      returnheader () {
          this.isshow = false;
          this.showsearchicon = true;
          this.searchname = '搜索';
          this.$store.commit('getsearchkey', '');
          this.$router.go(-1);
          this.searchkey = '';
          this.$store.state.reslist = '';
          this.$store.state.showres = false;
          this.$store.state.hotsearch = true;
        //   window.removeEventListener('scroll', this.handleScroll());
          window.removeEventListener('scroll', this.loadMore(), false);
      },
      search () {
            var key = this.searchitem || '';
            var page = this.page = 1;
            if (key) {
                this.Axios.get('http://localhost:3001/api/search/song/qq?key='+key+'&page='+page+'&limit=20')
                .then(res => {
                    this.$store.state.hotsearch = false;
                    // this.searchkey = item;
                    // this.hotsearch = false;
                    // this.$store.commit('getsearchkey', item)
                    if (res.status == 200) {
                        window.addEventListener('scroll', this.throttle(this.loadMore, 300), false);
                        //搜索
                        this.$store.state.showres = true;
                        var reslist = res.data.data.songList.map((item, index) => ({
                            songname: item.name,
                            songid: item.id,
                            album: item.album,
                            interval: item.interval,
                            singerlist: item.artists.map((item, index) => ({
                                singer: item.name || '',
                                singerid: item.id || ''
                            }))
                        }));
                        // this.specialname = res.data.data.data.special_key;
                        // this.specialurl = res.data.data.data.special_url;
                        // console.log(res.data.data.songList);
                        this.page = this.page + 1;
                        this.total = res.data.data.total;
                        this.$store.state.reslist = reslist;
                    }
                })
                .catch(function(err){
                    console.log(err);
            });
            }
            
      },
      loadMore () {
        this.scroll = document.body.scrollTop;
        this.clientHeight = document.documentElement.clientHeight;
        this.scrollheight = document.body.scrollHeight;
        // console.log(this.scroll)
        // console.log(parseInt(this.total/20));
        // console.log(this.page);
        // return;
    
        if (this.searchitem && this.$store.state.reslist) {
        var scroll = this.page == 2 && parseInt(this.scroll + this.clientHeight - 460) || parseInt(this.scroll - 1100*(this.page-2) + this.clientHeight - 460);
        if (parseInt(this.total/20) <= this.page) {
            // window.removeEventListener('scroll', this.loadMore());
            this.$store.state.loadmore = false;
            this.$store.state.allload = true;
            return;
        } else if (this.scroll + this.clientHeight >= parseInt(this.scrollheight)) {
            var page = this.page;
            var item = this.$store.state.searchkey || '';
            this.$store.state.loadmore = true;
            if (!time) {
            clearTimeout(time);
            var time = setTimeout(() => {
                this.Axios.get('http://localhost:3001/api/search/song/qq?key='+this.searchitem+'&page='+page+'&limit=20')
                .then(res => {
                    // this.searchkey = item;
                    this.$store.commit('getsearchkey', item)
                    if (res.status == 200) {
                        //搜索
                        var reslistmore = res.data.data.songList.map((item, index) => ({
                            songname: item.name,
                            songid: item.id,
                            album: item.album,
                            interval: item.interval,
                            singerlist: item.artists.map((item, index) => ({
                                singer: item.name || '',
                                singerid: item.id || ''
                            }))
                        }));
                        this.$store.state.loadmore = false;
                        // var resmore = this.$store.state.reslist.concat(reslistmore);
                        for (var i = 0; i < 20; i++) {
                            this.$store.state.reslist.push(reslistmore[i]);
                        }
                        // this.$store.state.reslist.push(resmore.slice(20));
                        this.page = this.page + 1;
                        // this.specialname = res.data.data.data.special_key;
                        // this.specialurl = res.data.data.data.special_url;
                        // console.log(res.data.data.songList);
                    }
                })
                .catch(function(err){
                    console.log(err);
            })
            }, 100)
            }
        }
        }
      }
  },
  computed: {
      ...mapGetters({
           searchkey:'getsearchkey'
    }),
    showheader () {
        return this.$store.state.showheader;
    }
  }
}
</script>

<style lang="scss">
*{
    // margin: 0;
    // padding: 0;
    // font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    font-family: Tahoma;
    font-weight: normal;
}
.header{
    background-color: #31C37C;
    width: 100%;
    height: 6rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index:1;
}
.top{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 1.4rem;
    span{
        color: #DBF3E8;
        font-size:1rem; 
        padding-left: 1.5rem;   
    }
    img {
        width: 1.5rem;
        height: 1.5rem;
    }
}
.left-icon{
    position: absolute;
    left: 0.8rem;
}
.right-icon{
  position: absolute;
  right: 0.8rem;
}
.link-active {
    span {
        color: #fff;
    }
}
.search-banner{
   input{
       position: absolute;
       left: 1rem;
       top: 4rem;
       height: 1rem;
       padding: 0.3rem;
       background-color: #2AAA6D;
       border-radius: 0.2rem;
       border: none;
       font-size: 1rem;
       z-index: 15;
       color: #DBF3E8;
       outline: none;
       &::placeholder{
           color: #DBF3E8;
       }
   }
   .search-icon {
        position: absolute;
        left: 40%;
        top: 4.3rem;
        width: 1.1rem;
        z-index: 15;
        background-size: 100%;
        height: 1.1rem;
        background-image: url('../assets/icons/search.png');
   }

   .return-icon {
        position: absolute;
        left: 0.7rem;
        top: 4rem;
        background-size: 100%;
        height: 1.6rem;
        width: 1.6rem;
        background-image: url('../assets/icons/return.png');
   }
}
.top-content{
    a{
        text-decoration: none;
    }
}
.siderbar{
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    height: 100%;
    width: 20rem;
    background-color: white;
    // opacity: 0.7;
    
    z-index: 99;
    overflow-y: scroll;
}

.btn-search {
    position: absolute;
    right: 1rem;
    top: 4.1rem;
    z-index: 10;
    text-decoration: none;
    color: #DBF3E8;
}
.showsider {
    transition: all 0.5s;
    transform: translateX(-90%);
}
.showheader {
    transition: all 0.5s;
    transform: translateY(-3.3rem);
}
.default-input {
    width: 90%;
    text-align: center;
}
.inputsearch {
    width: 70%;
    text-align: left;
    transition: all 0.3s;
    transform: translateX(2rem);
    width: 70%;
}
.siderbar.sider-enter-active,
.siderbar.sider-leave-active {
  transition: all 0.5s;
}
.siderbar.sider-enter,
.siderbar.sider-leave-active {
  transform: translate3d(-100%, 0, 0);
}
.siderbar-header{
    margin-top: 3rem;
    display: flex;
    text-align: center;
    border-bottom: 1px solid #C7C7C7;
    padding-bottom: 2rem;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    img{
    width: 2rem;
    height: 2rem;
}
   p{
       font-size: 1rem;
   }
   small{
       font-size: 0.5rem;
       color:#C7C7C7;
   }
    
}
.l-sidebar-header{
    // flex:1;
    
}
.m-sidebar-header{
    flex:1;
 
}
.r-sidebar-header{
    // flex:1;

}
.siderbar-content{
    margin-top: 2rem;
    margin-left: 1rem;
    text-align: left;
    p{
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }
}
.siderbar-footer{
    margin-top: 4rem;
    display: flex;
    border-top: 1px solid #C7C7C7;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    img{
        width: 2rem;
        height: 2rem;
        vertical-align: middle;
    }
   span{
       vertical-align: middle;
       color:black;
   }
}
.l-sidebar-bottom{
  margin-left: 0rem;
  span {
      font-size: 1rem;
      padding-left: 0;
  }
}
.r-sidebar-bottom{
 margin-left: 5.9rem;
 span {
      font-size: 1rem;
      padding-left: 0;
  }
}
.mask{
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 90;
    opacity: 0.7;
    background-color: black;
}
.wrapper{
    overflow-y: scroll;
    margin-top: 12rem;
}
.intr{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0rem;
}
.timer, .vip{
    border: 1px solid #C7C7C7;
    padding: 0.8rem;
    border-radius: 20rem; 
    img{
        width: 1.8rem;
        height: 1.8rem;
    }
    span{
        font-size: 1.8rem;
    }
}
.avatar{
    img{
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        margin-left: 3.5rem;
        margin-right: 3.5rem;
    }
}
.username{
    text-align: center;
    font-size: 2.5rem;
    margin-top: 1rem;   
}
.intr-songs{
    img{
        width: 5rem;
        height: 5rem;
    }
    p{
        font-size: 1.5rem;
    }
    small{
        font-size: 1rem;
        color:#C7C7C7;
    }
}
.t-intr-songs{
    display: flex;
    text-align: center;
    margin-top: 3rem;
    a{
        text-decoration: none;
        color:#000000;
    }
    
}
.t-intr-songs1{
    
    flex:1;
}
.t-intr-songs2{
    flex:1;
}
.t-intr-songs3{
    flex:1;
}
.b-intr-songs{
    display: flex;
    text-align: center;
    margin-top: 2rem;
    
}
.b-intr-songs1{
    
    flex:1;
}
.b-intr-songs2{
    flex:1;
}
.b-intr-songs3{
    flex:1;
}
.blank{
    width: 100%;
    height: 1.6rem;
    // background-color: #CECECE;
    background-color: #EBEBEB;
    // opacity: 0.4;
    margin-top: 2rem;
    margin-bottom: 3rem;
}
</style>

