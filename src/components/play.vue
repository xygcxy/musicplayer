<template>
  <div>
    <div class="playing" >
      <div class="title">
        <a class="mini" @click="mini"></a>
        <p>{{songname}}</p>
        <a href=""></a>
      </div>
      <div class="t-small">
        <small>—— {{singer}} ——</small>
      </div>
        <div class="rot">
            <img :src="cover" alt="" class="rotImg" v-show="rotImgShow" :class="{'pauseplay': !pause, 'continueplay': pause}">
        </div>
        
    <div class="control">
		<div class="operate operate--left">
			<a class="operate__item js-playlist" href="javascript:;" style="display:none">
				<i class="icon_play_list">歌单列表</i>
			</a>
		</div>


		<div class="progress">
			<!-- 无拖动点 增加progress--no_dot -->
			<div class="progress__bar progress--no_dot">
				<div class="progress__box">
					<div class="progress__bg"></div>
					<div class="progress__load" style="-webkit-transform:translateX(100%);"></div>
					<div class="progress__play" id="js-progress" :style="{animation: playProgress}" :class="{pause_progress: !pause}"></div>
					<div class="progress__play" id="play_on" :style="{animation: playProgress}" :class="{pause_progress: !pause}"><span class="progress__dot" id="btn_pro"></span></div>
				</div>
			</div>
			<span class="progress__start js-time-start">00:00</span>
			<span class="progress__end js-time-total">{{interval}}</span>
		</div>

      
      <a class="icon_play js-play" href="javascript:;" @click="play" :class="{'btn-pause': !pause}"></a>
      <div class="operate operate--right">

			<a class="operate__item js-like" href="javascript:;">
				<i class="icon_like"></i>
			</a>
		</div>
    <div class="btns">
        <a class="btn_download js-download" href="javascript:;"></a>
      </div>
    </div>

      </div>
      <div class="bg-img" :style="{backgroundImage:'url('+ coverimg + ')'}">
      </div>
      <div class="bgmask" style="opacity:0.6"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      coverimg: '',
      rotImgShow: true,
      playProgress: 'play_progress' + ' ' + this.$store.state.interval +'s linear infinite'
    }
  },
  computed: {
    songname () {
      return this.$store.state.songname
    },
    singer () {
      return this.$store.state.singer
    },
    cover () {
      this.coverimg = this.$store.state.cover;
      return this.$store.state.cover;
    },
    showFooter () {
      return this.$store.state.showFooter;
    },
    isshow () {
      return this.$store.state.isshow;
    },
    pause () {
      return this.$store.state.isPlay;
    },
    interval () {
      var songtime = this.formatVideoDuration(this.$store.state.interval);
      return songtime;
    },
    // playProgress () {
    //   if (this.$store.state.isPlay){
    //     return {
    //       'animation-play-state': 'paused'
    //     }
    //   } else {
    //     return {
    //       'animation-play-state': 'running',
    //       // animation: 'play_progress' + ' ' + this.$store.state.interval +'s linear infinite'
    //     }
    //   }
    // }
    // showplay () {
    //   return this.$store.state.showplay;
    // }
  },
  methods: {
    play () {
      this.pause = !this.pause;
      this.$store.state.isPlay = !this.$store.state.isPlay
      var play = document.querySelector('.audio')
      // var p = document.querySelector('.avatar1')
      var p = document.querySelector('.avatar')
      if(!this.$store.state.isPlay) {
        play.pause()
        // this.$store.state.avatar1Show = false
        // this.$store.state.avatarShow = true
        // this.$store.state.rotImg1Show = false
        // this.$store.state.rotImgShow = true
      }else {
        play.play()
        // this.$store.state.avatarShow = false
        // this.$store.state.avatar1Show = true
        // this.$store.state.rotImg1Show = true
        // this.$store.state.rotImgShow = false
      }
    },
    mini () {
      this.$router.go(-1);
      this.$store.state.showFooter = true;
      // this.$store.state.showplay = false;
    }
  }
}
</script>

<style lang="scss">
// .header {
//   display: none;
// }
.rot {
  top: 10rem;

}
.playing{
  position: absolute;
  z-index: 30;
  width: 100%;
  top: 0;
  bottom: 0;
}
.title {
  p {color: #fff;}
}
.t-small {
  small {
    color: #fff;
  }
}
.rot{
    width: 100%;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.bg-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    background-size: cover;
    background-position: bottom center;
    -webkit-filter: blur(15px);
    // -webkit-transform: scale(1.15);
}
.bgmask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: #000;
}
.rotImg {
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  z-index: 33;
}
.control {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 154px;
}
.progress {
    position: absolute;
    bottom: 7rem;
    width: 100%;
    height: 40px;
}
.progress--no_dot {
    right: 55px;
}
.progress__bar {
    position: absolute;
    top: 0;
    left: 55px;
    right: 47px;
    height: 40px;
    overflow: hidden;
}
.progress__bg {
    left: 0;
    z-index: 3;
    background-color: rgba(0,0,0,.1);
}

.progress__bg, .progress__load, .progress__play {
    position: absolute;
    top: 19px;
    width: 100%;
    height: 2px;
    -webkit-transition: all 1s linear;
}
.progress__load {
    left: -100%;
    z-index: 4;
    background-color: rgba(255,255,255,.2);
}
a, a:hover {
    text-decoration: none;
}
.icon_play {
    position: absolute;
    right: 43%;
    width: 3rem;
    height: 3rem;
    bottom: 4rem;
    border: solid 1px #fff;
    border-radius: 999px;
    background: rgba(0,0,0,.1);
    opacity: .6;
}
.icon_play::after, .btn_download::before, .tips.success p::before {
    background-image: url('../assets/icons/sprite_play.png');
    background-repeat: no-repeat;
    background-size: 40px 350px;
}
.mini {
    z-index: 33;
    background-image: url('../assets/icons/jiantou.png');
    background-size: cover;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0.9rem;
    left: 1rem;
}
.btn_download::before, .btn_qrcode::after, .download_bar__logo, .download_bar__tit, .icon_bgmusic, .icon_kg, .icon_like, .icon_mv, .icon_play::after, .icon_play_list, .icon_translate, .progress__dot::before, .tips.success p::before {
    background-image: url('../assets/icons/sprite_play_v2.png');
    background-repeat: no-repeat;
    background-size: 70px;
}
.icon_like {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-size: 4rem;
}
.btn_download {
    display: block;
    opacity: .5;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url('../assets/icons/player.png');
    background-position: 0 -120px;
}
.progress__dot::before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    margin: 12px auto;
    background-position: -40px -30px;
}
.icon_play::after {
    content: "";
    display: block;
    width: 17px;
    height: 19px;
    margin: 17px 0 0 19px;
    background-position: 0 -180px;
}
.progress__play {
    left: -100%;
    z-index: 5;
    width: 100%;
    background-color: #31c27c;
}
.progress__bg, .progress__load, .progress__play {
    position: absolute;
    top: 19px;
    width: 100%;
    height: 2px;
    -webkit-transition: all 1s linear;
}
.progress__dot {
    position: absolute;
    top: -19px;
    right: -28px;
    width: 40px;
    height: 40px;
}
.btn-pause::after {
    background-position: 0 -150px;
    margin: 15px 0 0 18px;
}
.operate--right {
    left: 2rem;
}
.operate {
    position: absolute;
    bottom: 2rem;
    overflow: hidden;
}
.btns {
    position: absolute;
    bottom: 2rem;
    left: 8rem;
}

@keyframes play_progress
{
0%   {transform:translateX(0);}
100% {transform:translateX(98%);}
}
.pause_progress {
  animation-play-state:paused !important;
  -webkit-animation-play-state:paused !important; 
}
@keyframes rotatecover
{
0%   {transform:rotateZ(0deg);}
100% {transform:rotateZ(360deg);}
}
.rotImg {
    -webkit-transform:translate3d(0,0,0);
    -moz-transform:translate3d(0,0,0);
    transform:translate3d(0,0,0);
    -webkit-animation:rotatecover 28s linear infinite;
    -moz-animation:rotatecover 28s linear infinite;
    animation:rotatecover 28s linear infinite;
}
.pauseplay {
  animation-play-state:paused;
  -webkit-animation-play-state:paused; 
}
.continueplay {
  animation-play-state:running;
  -webkit-animation-play-state:running;
}
</style>



