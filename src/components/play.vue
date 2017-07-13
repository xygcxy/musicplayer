<template>
  <div>
    <div class="playing">
      <div class="title">
        <a href="" class="mini"></a>
        <p>{{songname}}</p>
        <a href=""></a>
      </div>
      <div class="t-small">
        <small>—— {{singer}} ——</small>
      </div>
        <div class="rot">
            <img :src="cover" alt="" class="rotImg" v-show="rotImgShow">
            <img :src="cover" alt="" class="rotImg1" v-show="rotImg1Show">
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
					<div class="progress__play" id="js-progress" style="transform: translateX(0.352682%); transition-duration: 1s;"></div>
					<div class="progress__play" id="play_on"><span class="progress__dot" style="display:none;" id="btn_pro"></span></div>
				</div>
			</div>
			<span class="progress__start js-time-start">00:00</span>
			<span class="progress__end js-time-total">04:36</span>
		</div>

      
      <a class="icon_play js-play" href="javascript:;"></a>
      <div class="operate operate--right">

			<a class="operate__item js-like" href="javascript:;">
				<i class="icon_like">喜欢</i>
			</a>
		</div>
    <div class="btns">
        <a class="btn_download js-download" href="javascript:;">下载这首歌</a>
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
      rotImgShow: true
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
.rot, .small {
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
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.7rem;
    left: 1rem;
}
.icon_play::after {
    content: "";
    display: block;
    width: 17px;
    height: 19px;
    margin: 15px 0 0 18px;
    background-position: 0 -150px;
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
    left: 5rem;
}
</style>



