<template>
  <div id="app">
    <v-index ref="showheaderef"></v-index>
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <transition :name="transitionName">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <div class="footer" v-show="showFooter">
      <router-link to="/play" v-on:click.native="showhf" v-show="showfootplay" ref="play">
        <img :src="cover" alt="" class="avatar" v-show="avatarShow" >
        <img :src="cover" alt="" class="avatar1" v-show="avatar1Show" >
        <div class="Name">
        <p class="name">{{songname}}</p>
        <small class="singerName">{{singer}}</small>
        </div>
        </router-link>
        <p v-show="!showfootplay" class="nosong">QQ音乐 听我想听的歌</p>
        <audio :src="src" class="audio" v-bind:autoplay="isPlay"></audio>
        <img class="img" src="./assets/icons/pause.png" alt="" @click="play" v-show="!isPlay">
        <img class="img1" src="./assets/icons/play.png" alt="" @click="play" v-show="isPlay" >
    </div>
  </div>
</template>

<script>
import index from '@/components/index'
import play from './components/play'
export default {
  name: 'app',
  data () {
    return {
        // showFooter: true,
        picUrl: '',
        avatarShow: true,
        avatar1Show: false,
        transitionName: 'slide-left'
    }
  },
  mounted() {
    var audio = document.querySelector('.audio');
    audio.addEventListener('timeupdate', this.throttle(this.Progress));
  },
  watch: {
    '$route'(to, from) {
    const toDepth = to.path;
    const fromDepth = from.path;
    // this.transitionName = toDepth == '/detail' && 'slide-left';
    // console.log(this.transitionName);
}
  },
  computed: {
    src () {
      return this.$store.state.src
    },
    songname () {
      return this.$store.state.songname
    },
    singer () {
      return this.$store.state.singer
    },
    cover () {
      return this.$store.state.coversmall
    },
    showFooter () {
      return this.$store.state.showFooter;
    },
    isshow () {
      return this.$store.state.isshow;
    },
    isPlay () {
      return this.$store.state.isPlay;
    },
    showfootplay () {
      if (this.$store.state.songname) {
        return this.$store.state.showfootplay;
      }
    }
  },
  components: {
    'v-index': index
  },
  methods: {
      play () {
      this.$store.state.isPlay = !this.$store.state.isPlay
      var play = document.querySelector('.audio')
      // var p = document.querySelector('.avatar1')
      var p = document.querySelector('.avatar')
      if(!this.$store.state.isPlay) {
        play.pause()
        this.$store.state.avatar1Show = false
        this.$store.state.avatarShow = true
        this.$store.state.rotImg1Show = false
        this.$store.state.rotImgShow = true
      }else {
        play.play()
        this.$store.state.avatarShow = false
        this.$store.state.avatar1Show = true
        this.$store.state.rotImg1Show = true
        this.$store.state.rotImgShow = false
      }
    },
    showhf () {
      if (this.$store.state.songname) {
        this.$store.state.showFooter = false;
        this.$refs.showheaderef.showheader = false;
        this.$store.state.showfootplay = true;
        // this.$refs.showheaderef.show('false');
      }
    },
    Progress () {
      var currenttime = document.querySelector('.audio').currentTime;
      this.$store.state.progress = currenttime;
    }
  },
}
</script>

<style lang="scss">
* {
  // margin: 0;
  // padding: 0;
  text-decoration: none;
  font-family: Tahoma;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ededed;
    height: 4rem;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    z-index: 1;
    img {
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      // right: 2rem;
      top: 0.7rem;
    }
}
body {
  margin: 0;
}

.slide-left-enter-active {
  transition: all 0.5s ease;
}
.slide-left-enter {
  // -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
// .slide-left-leave {
//   transform: translateX(-100%);
// }
// .slide-left-leave-active, .slide-right-enter {
//   // -webkit-transform: translateX(-100%);
//   transform: translateX(-100%);
// }
.avatar{
  position: fixed;
  width: 8rem;
  height: 8rem;
  left: 1rem;
  border-radius: 50%;
}
.avatar1{
  position: fixed;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  animation: rotate 10s linear infinite ;
  -webkit-animation: rotate 10s linear infinite;
  transform-origin: center center;
}
.Name{
  color: #000000;
  margin-left: 4rem; 
  text-align: left;
  /*text-decoration: none; */
}
.footer .img,.footer .img1{
  width: 3rem;
  height: 3rem;
  right: 1rem;
  top: 0.5rem;
}
.name{
  font-size: 1rem;
  margin: 0;
}
.singerName{
  font-size: 0.8rem;
}
.nosong {
  padding-left: 1rem;
  font-size: 0.9rem;
}

</style>
