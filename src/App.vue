<template>
  <div id="app">
    <v-index></v-index>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <div class="footer" v-show="showFooter">
      <router-link to="/play">
        <img :src="picUrl" alt="" class="avatar" v-show="avatarShow" >
        <img :src="picUrl" alt="" class="avatar1" v-show="avatar1Show" >
        <div class="Name">
        <p class="name">{{name}}</p><br/>
        <small class="singerName">{{singerName}}</small>
        </div>
        </router-link>
        <audio :src="src" class="audio" v-bind:autoplay="isPlay" loop></audio>
        <img class="img" src="./assets/icons/pause.png" alt="" @click="play" v-show="!isPlay">
        <img class="img1" src="./assets/icons/play.png" alt="" @click="play" v-show="isPlay" >
    </div>
  </div>
</template>

<script>
import index from '@/components/index'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'v-index': index
  },
  methods: {
      play () {

      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background-color: #ededed;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    img {
      position: absolute;
      width: 3rem;
      height: 3rem;
      right: 2rem;
      top: 1rem;
    }
}
body {
  margin: 0;
}

</style>
