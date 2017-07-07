<template>
  <div>
    <div class="playing">
      <div class="bg-img">
        <img src="" alt="">
      </div>
      <div class="bgmask" style="opacity:0.6"></div>
      <div class="title">
        <a href="">
          <img src="" alt="">
        </a>
        <p>{{songname}}</p>
        <a href=""></a>
      </div>
      <div class="t-small">
        <small>——{{singer}}——</small>
      </div>
        <div class="rot">
            <img :src="cover" alt="" class="rotImg" v-show="rotImgShow">
            <img :src="cover" alt="" class="rotImg1" v-show="rotImg1Show">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

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
      return this.$store.state.cover
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
</style>



