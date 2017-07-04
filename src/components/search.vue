<template>
<div>
  <div class="search">
    <div class="search-rec" v-show="hotsearch">
        <h3>热门搜索</h3>
        <div class="rec-data">
        <a :href="specialurl" class="special-k">{{specialname}}</a>
        <a @click="search(item.name)" v-for="item in searchlist" :key="item.id" class="normal-k" >{{item.name}}</a></div>
    </div>
    <div id="search_result" class="mod_search_content">
        <ul class="search_content">
        <li data-limit="" :data-songmid="item.songid" v-for="item in reslist" :key="item.id">
        <i class="icon "></i>
        <h6 class="main_tit">{{item.songname}}</h6>
        <span class="sub_tit" v-for="list in item.singerlist" :key="list.id">{{list.singer}}</span>
    </li> 
    </ul>
    </div>
    <div id="loading" class="mod_loading" style="display: none;">
            <i class="loading__icon"></i>
            <span class="loading__text">正在载入更多...</span>
    </div>
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
          hotsearch: true,
          reslist: '',
          singerlist: '',
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
    },
  methods: {
      searchrequest (){
        this.Axios.get('http://localhost:3001/api/hotsearch')
            .then(res => {
                if (res.status == 200) {
                    //热门搜索
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
          this.Axios.get('http://localhost:3001/api/search/song/qq?key='+item)
            .then(res => {
                // this.searchkey = item;
                this.hotsearch = false;
                this.$store.commit('getsearchkey', item)
                if (res.status == 200) {
                    //搜索
                    this.reslist = res.data.data.songList.map((item, index) => ({
                        songname: item.name,
                        songid: item.id,
                        singerlist: item.artists.map((item, index) => ({
                            singer: item.name || '',
                            singerid: item.id || ''
                        }))
                    }));
                    // this.specialname = res.data.data.data.special_key;
                    // this.specialurl = res.data.data.data.special_url;
                    // console.log(res.data.data.songList);
                }
            })
            .catch(function(err){
                console.log(err);
        });
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
    ul {
        margin: 0;
        padding: 0;
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
</style>
