<template>
<div>
  <div class="search">
    <div class="search-rec" v-show="hotsearch" >
        <h3>热门搜索</h3>
        <div class="rec-data">
        <a :href="specialurl" class="special-k">{{specialname}}</a>
        <a @click="search(item.name)" v-for="item in searchlist" :key="item.id" class="normal-k" >{{item.name}}</a></div>
    </div>
    <div id="search_result" class="mod_search_content" ref="viewBox" v-show="showres">
        <ul class="search_content">
        <li data-limit="" :data-songmid="item.songid" v-for="item in reslist" :key="item.id" @click="playing(item.songid, item.songname, item.singerlist[0].singer, item.interval, item.album)">
        <i class="icon "></i>
        <h6 class="main_tit">{{item.songname}}</h6>
        <span class="sub_tit" v-for="list in item.singerlist" :key="list.id">{{list.singer}}</span>
        </li> 
    </ul>
    </div>
    <div id="loading" class="mod_loading" v-show="loadmore">
            <i class="loading__icon"></i>
            <span class="loading__text">正在载入更多...</span>
    </div>
    <div id="load_complete" class="load_complete" style="display: none;" v-show="allload">已加载全部</div>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
      return {
          searchlist:'',
          specialname: '',
          specialurl: '',
        //   hotsearch: true,
        //   reslist: '',
          singerlist: '',
          scroll: '',
          page: 1,
        //   searchkey: ''
      }
  },
  created () {
      this.searchrequest();
      
  },
  computed: {
        ...mapState({
            searchkey: state => state.searchkey
        }),
        reslist () {
            return this.$store.state.reslist
        },
        hotsearch () {
            return this.$store.state.hotsearch
        },
        showres () {
            return this.$store.state.showres
        },
        loadmore () {
            return this.$store.state.loadmore
        },
        allload () {
            return this.$store.state.allload
        }
    },
    mounted () {
        // window.addEventListener('scroll', this.throttle(this.handleScroll));
    },
    watch: {
    },
  methods: {
      searchrequest (){
        this.Axios.get('http://localhost:3001/api/hotsearch')
            .then(res => {
                if (res.status == 200) {
                    //热门搜索
                    this.$store.state.showres = true;
                    this.searchlist = res.data.data.data.hotkey.slice(0, 10).map((item, index) => ({
                        name: item.k,
                        num: item.n,
                    }));
                    this.specialname = res.data.data.data.special_key;
                    this.specialurl = res.data.data.data.special_url;
                }
            })
            .catch(function(err){
                console.log(err);
        });
      },
      search(item) {
          var page = this.page = 1;
          this.Axios.get('http://localhost:3001/api/search/song/qq?key='+item+'&page='+page+'&limit=20')
            .then(res => {
                // this.searchkey = item;
                this.$store.state.hotsearch = false;
                this.$store.commit('getsearchkey', item)
                if (res.status == 200) {
                    window.addEventListener('scroll', this.throttle(this.handleScroll, 300), false);
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
                    this.$store.state.reslist = reslist;
                    this.page = this.page + 1;
                    this.total = res.data.data.total;
                    // this.specialname = res.data.data.data.special_key;
                    // this.specialurl = res.data.data.data.special_url;
                    // console.log(res.data.data.songList);
                }
            })
            .catch(function(err){
                console.log(err);
        });
      },
      playing(id, songname, singer, interval, album) {
          this.Axios.get('http://localhost:3001/api/get/song/qq?id='+id)
            .then(res => {
                // this.searchkey = item;
                // this.$store.commit('getsearchkey', item)
                if (res.status == 200) {
                    this.$store.state.src = res.data.data.url;
                    this.$store.state.songname = songname;
                    this.$store.state.singer = singer;
                    this.$store.state.coversmall = album.coverSmall;
                    this.$store.state.cover = album.cover;
                    this.$store.state.showplay = true;
                    this.$store.state.isPlay = true;
                    this.$store.state.showfootplay = true;
                    this.$store.state.interval = interval;
                    //搜索
                    // this.reslist = res.data.data.songList.map((item, index) => ({
                    //     songname: item.name,
                    //     songid: item.id,
                    //     singerlist: item.artists.map((item, index) => ({
                    //         singer: item.name || '',
                    //         singerid: item.id || ''
                    //     }))
                    // }));
                    // this.specialname = res.data.data.data.special_key;
                    // this.specialurl = res.data.data.data.special_url;
                    // console.log(res.data.data.songList);
                }
            })
            .catch(function(err){
                console.log(err);
        });
      },
      handleScroll () {
        this.scroll = document.body.scrollTop;
        this.clientHeight = parseInt(1100*(this.page-1));
        this.scrollheight = document.body.scrollHeight;
        // console.log(this.scroll)
        // console.log(this.clientHeight);
        // console.log(this.scrollheight);
        // return;
        if (this.$store.state.searchkey && this.$store.state.reslist) {
        var scroll = this.page == 2 && parseInt(this.scroll + this.clientHeight - 460) || parseInt(this.scroll - 1100*(this.page-2) + this.clientHeight - 460);
        if (parseInt(this.total/20) <= this.page) {
            // window.removeEventListener('scroll', this.handleScroll());
            this.$store.state.loadmore = false;
            this.$store.state.allload = true;
            return;
        } else if (scroll >= parseInt(this.scrollheight)) {
            var page = this.page;
            var item = this.$store.state.searchkey;
            this.$store.state.loadmore = true;
            if (!time) {
            clearTimeout(time);
            var time = setTimeout(() => {
                this.Axios.get('http://localhost:3001/api/search/song/qq?key='+item+'&page='+page+'&limit=20')
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
                        // this.$store.state.reslist.push(resmore.slice(20));
                        for (var i = 0; i < 20; i++) {
                            this.$store.state.reslist.push(reslistmore[i]);
                        }
                        this.page = this.page + 1;
                        // this.specialname = res.data.data.data.special_key;
                        // this.specialurl = res.data.data.data.special_url;
                        // console.log(res.data.data.songList);
                    }
                })
                .catch(function(err){
                    console.log(err);
            })
            }, 1500)
            }
        }
        }  
      }       
   }
}
</script>

<style lang="scss">
.search {
    margin-top: 2.8rem;
}
h3{
    text-align: left;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
}
.special-k {
    padding: 0.2rem 1rem;
    margin-bottom: 0.6rem;
    margin-right: 0;
    margin-left: 1rem;
    border: 1px solid #fc4524;
    border-radius: 2rem;
    color: #fc4524;
}
.search-rec{
    display: flex;
    flex-wrap:wrap;
    .rec-data {
        display: flex;
        flex-wrap:wrap;
    }
    .normal-k{
        padding: 0.2rem 1rem;
        margin-bottom: 0.6rem;
        margin-right: 0;
        margin-left: 1rem;
        border: 1px solid #eee;
        border-radius: 2rem;
        color: grey;
    }
}
.mod_search_content {
    margin: 0;
    padding: 0;
    // position: absolute;
    position: relative;
    height: 100%;
    // margin-bottom: 4rem;
    overflow: scroll;
    ul {
        margin: 0;
        padding: 0;
        // height: 100rem;
        overflow-y: scroll;
    }
}
.mod_search_content li {
    text-align: left;
    position: relative;
    height: 55px;
    padding-left: 56px;
    overflow: hidden;
}
.mod_search_content .icon {
    position: absolute;
    top: 18px;
    left: 18px;
    width: 22px;
    height: 20px;
    background-position: 0 0;
}
.mod_search_content .icon, .mod_search_content .icon.no_copyright::after {
    background-image: url(../assets/icons/search_sprite.png);
    background-repeat: no-repeat;
    background-size: 22px 30px;
}
.mod_search_content .main_tit {
    margin: -10px 0 2px;
    line-height: 18px;
    font-size: 1rem;
    font-weight: normal;
    color: #000;
}
.mod_search_content .sub_tit {
    color: #808080;
    padding: 0;
    margin: 0;
    font-size: 0.5rem;
}
.mod_search_content .main_tit, .mod_search_content .sub_tit {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mod_search_content li::after {
    content: "";
    position: absolute;
    height: 1px;
    top: 0;
    left: 0;
    right: 0;
    background: #e5e5e5;
}
.mod_loading {
    position: relative;
    height: 55px;
    line-height: 55px;
    padding-bottom: 4rem;
    text-align: center;
}
@keyframes ani_loading{
    from{
        -webkit-transform:rotate(0deg);
    }
    to {
        -webkit-transform:rotate(360deg);
    }
}
.loading__icon {
    vertical-align: middle;
    position: relative;
    top: -2px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../assets/icons/icon_loading.png) no-repeat;
    background-size: 20px 20px;
    -webkit-animation: ani_loading 1s infinite;
}
.loading__text {
    margin-left: 5px;
    font-size: 12px;
    color: #808080;
}
.load_complete {
    line-height: 40px;
    text-align: center;
    padding-bottom: 4rem;
    color: #808080;
}
</style>
