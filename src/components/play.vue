<template>
  <div>
    <div class="playing">
      <div class="title">
        <a href="">
          <img src="" alt="">
        </a>
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

		<div class="operate operate--right">

			<a class="operate__item js-like" href="javascript:;">
				<i class="icon_like">喜欢</i>
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
.playing {
  z-index: 30;
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
    -webkit-transform: scale(1.15);
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
</style>



