<template>
  <div>
      <div class="top_content">
          <div class="top_header">
            <div class="icon_back" @click="backlib"></div>
            <div class="title">排行</div>
          </div>
          <p>{{qqtoptitle}}</p>
          <div class="qq_top">
              <ul>
                  <li class="qqtop" v-for="(item, index) in qqtop" :key="item.id">
                      <div class="topmain">
                          <a class="topic_media">
                              <img :src="item.pic_v12" alt="">
                              <span><i>{{item.listennum|formatnum}}</i></span>
                          </a>
                          <div class="top_info">
                              <div class="qq_song">
                              <h3>{{item.ListName}}</h3>
                              <p v-for="(value, index) in item.songlist" :key="value.id">
                                 <span class="singername">{{index+1}}</span><span> {{value.songname}}</span>
                                 <span class="singername">-{{value.singername}}</span>
                              </p>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="global_top">
              <p class="global_title">{{globaltoptitle}}</p>
              <div class="global_top_content">
              <div class="global_content" v-for="(item, index) in globaltop" :key="item.id">
                  <div class="global_info">
                  <img :src="item.pic_v12" alt="">
                  <p>{{item.ListName}}</p>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
        qqtop: '',
        globaltop: '',
      }
  },
  mounted () {
      this.gettop();
  },
  methods: {
    gettop () {
        this.Axios.get('http://localhost:3001/api/gettopall')
            .then(res => {
                // this.searchkey = item;
                // this.$store.commit('getsearchkey', item)
                if (res.status == 200) {
                    this.qqtop = res.data.data[0].List;
                    this.qqtoptitle = res.data.data[0].GroupName;
                    this.globaltop = res.data.data[1].List;
                    this.globaltoptitle = res.data.data[1].GroupName;
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
  },
  computed: {
      
  }
}
</script>
<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
}
body{
    background: #f4f4f4;
}
.top_header {
    height: 3.5rem;
    background-color: #31C37C;
}
.title {
    padding-top: 1.2rem;
    font-size: 1.2rem;
    color: #fff;
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
.qq_top {
    margin: 10px;
}
.topmain {
    display: -webkit-box;
    background: #fff;
    i {
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        opacity: .6;
    }
}
.topic_media {
    position: relative;
    width: 8rem;
    height: 8rem;
    display: block;
    img {
        width: 8rem;
        height: 8rem;
    }
}
.topic_media::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8rem;
    z-index: 1;
    // background-image: url(img/shadow_rp_b.png?max_age=19830212&d=20151105145423);
    // background-size: 1px 117px;
    // background-repeat: repeat-x;
}
.top_info {
    position: relative;
    -webkit-box-flex: 1;
    text-align: left;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    h3 {
        font-size: 1rem;
        color: #000;
        font-weight: normal;
        margin-bottom: 5px;
    }
    h3, p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    p{
        padding-bottom: 0.3rem;
    }
}
.qq_song {
    -webkit-box-flex: 1;
    margin: 0 10px 0 15px;
}
.singername {
    opacity: .6;
}
.global_top {
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    padding-bottom: 4rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    img {
        width: 99%;
        height: 99%;
    }
    p {
        overflow: hidden;
        // white-space: nowrap;
        text-overflow: ellipsis;
    }
}
.global_title {
    position: relative;
    margin: 0 auto;
}
.global_info {
    position: relative;
    overflow: hidden;
}
.global_top_content {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
}
.global_content {
    width:33%;
    height: 33%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    p {
        padding-left: 0.5rem;
        font-size: 0.9rem;
        text-align: left;
        height: 2.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}


</style>
