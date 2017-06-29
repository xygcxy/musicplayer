<template>
  <div>
    <div class="playing">
      <div class="bg-img">
        <img src="" alt="">
      </div>
      <div class="title">
        <a href="">
          <img src="" alt="">
        </a>
        <p>我的歌</p>
        <a href=""></a>
      </div>
      <div class="t-small">
        <small>——我的歌——</small>
      </div>
        <div class="rot">
            <img :src="picUrl" alt="" class="rotImg" v-show="rotImgShow">
            <img :src="picUrl" alt="" class="rotImg1" v-show="rotImg1Show">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  
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
</style>

