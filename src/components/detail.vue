<template>
  <div>
    <div class="mod_focus">
        <div class="icon_back" @click="backlib"></div>
        <div class="focus_bg" :style="{backgroundImage: 'url('+cover+')'}"></div>
        <div class="focus_title">
            <div class="focus_info">
                <div class="focus_text">
                    <h1 class="focus_name">{{name}}</h1>
                    <p class="focus_des">
                        <span>{{num}}人播放</span>
                        <span class="author">{{author}}</span>
                    </p>
                </div>
                <a class="focus_play" @click="play()"></a>
            </div>
        </div>
        <div class="focus_gradient"></div>
    </div>
    <div class="content_song">
    <div class="tab_title">
        <p>歌曲</p>
        <p>详情</p>
    </div>
    <div class="song_list_all">
        <ul class="song_list">
        <li v-for="(item, index) in songlist" :key="item.id">
            <a class="song_content" @click="play(item.id, index)">
                <div class="songlist">
                    <h3>{{item.name}}</h3>
                    <p>{{item.album.name}}</p>
                </div>
            </a>
        </li>
        </ul>
    </div>
    <div class="desc">
        <div class="desc_content">
            <p>{{desc}}</p>
        </div>
    </div> 
    </div>   
  </div>
</template>

<script>
export default {
  data () {
      return {
        cover: '',
        name: '',
        author: '',
        num: '',
        songlist: '',
        desc: '',
      }
  },
  mounted () {
    
  },
  created () {
    this.id = this.$route.query.id;
    this.getplaylist();
  },
  methods: {
    getplaylist () {
        this.Axios.get('http://localhost:3001/api/get/playlist/qq?id='+this.id)
            .then(res => {
                // this.searchkey = item;
                // this.$store.commit('getsearchkey', item)
                if (res.status == 200) {
                    this.cover = res.data.data.cover;
                    this.name = res.data.data.name;
                    this.author = res.data.data.author.name;
                    this.num = this.shorten(res.data.data.visitnum);
                    this.songlist = res.data.data.songList;
                    this.desc = res.data.data.desc;
                }
            })
            .catch(function(err){
                console.log(err);
        });
    },
    backlib () {
        this.$store.state.showheader = true;
        this.$router.go(-1);
    },
    play (id, index) {
        id = id || this.songlist[0]['id'];
        index = index || 0;
        this.Axios.get('http://localhost:3001/api/get/song/qq?id='+id)
            .then(res => {
                // this.searchkey = item;
                // this.$store.commit('getsearchkey', item)
                if (res.status == 200) {
                    this.$store.state.src = res.data.data.url;
                    this.$store.state.reslist = this.songlist;
                    this.$store.state.songname = this.songlist[index]['name'];
                    this.$store.state.singer = this.songlist[index]['artists'][0]['name'];
                    this.$store.state.coversmall = this.songlist[index]['album']['coverSmall'];
                    this.$store.state.cover = this.songlist[index]['album']['cover'];
                    this.$store.state.showplay = true;
                    this.$store.state.isPlay = true;
                    this.$store.state.showfootplay = true;
                    this.$store.state.indexid = index;
                    this.$store.state.interval = this.songlist[index]['interval'];
                    this.$store.state.previd = index > 0 && this.songlist[index-1];
                    this.$store.state.nextvid = index < this.songlist.length && this.songlist[index+1];
                }
            })
            .catch(function(err){
                console.log(err);
        });
    }
  },
  computed: {

  }
}
</script>
<style scoped lang="scss">
*{
    padding: 0;
    margin: 0;
}
.mod_focus {
    position: relative;
    overflow: hidden;
    z-index: 5;
}
.icon_back {
    background-image: url(../assets/icons/return.png);
    background-size: cover;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
}
.focus_bg {
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
}
.focus_bg::after {
    content: "";
    display: block;
    padding-top:100%;
}
.focus_title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    color: #fff;
}
.focus_name {
    font-size: 1.5rem;
}
.focus_gradient {
    position: absolute;
    bottom: 0;
    color: #000;
    left: 0;
    z-index: 2;
    width: 100%;
    background-image: -webkit-linear-gradient(top,transparent,currentColor 80%);
}
.focus_gradient::after{
    content: "";
    padding-top: 60%;
    display: block;
}
.focus_info {
    display: -webkit-box;
    -webkit-box-align: center;
    margin: 0 15px 25px;
}
.focus_text {
    -webkit-box-flex: 1;
    text-align:left;
}
.focus_name {
    position: relative;
    height: 36px;
    overflow: hidden;
    font-size: 24px;
}
.focus_des, .focus__tit {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1rem;
}
.focus_play {
    position: relative;
    display: block;
    width: 42px;
    height: 42px;
    margin-left: 10px;
    border: solid 2px #fff;
    border-radius: 42px;
}
.focus_play::after {
    background-image: url('../assets/icons/sprite_play.png');
    background-repeat: no-repeat;
    content: "";
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 12px 0 0 12px;
    background-size: 2rem;
    background-position: 5px -118px;
}
.author {
    margin-left: 3rem;
}
.tab_title {
    display: flex;
    height: 2.5rem;
    p {
        flex: 1;
        line-height: 2.5rem;
    }
}
.content_song {
    position: relative;
    overflow: hidden;
}
.song_list {
    border-color: rgba(255,255,255,.15);
    text-align: left;
    padding-bottom: 5rem;
}
.songlist {
    position: relative;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    padding-right: 15px;
    h3{
        color: #000;
        font-size: 1.1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    p{
        color: rgba(37, 37, 37, 0.6);
        font-size: 0.9rem;
    }
}
.songlist::after {
    border-color: rgba(0,0,0,.15);
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    border-width: 0 0 1px 0;
    content: "";
    -webkit-transform: scaleY(.5);
    position: absolute;
    z-index: 1;
    -webkit-box-sizing: border-box;
    pointer-events: none;
    border-style: solid;
}
.song_content {
    display: -webkit-box;
    height: 60px;
    padding-left: 15px;
}
</style>
