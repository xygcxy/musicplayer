<template>
<div>
  <div class="search">
    <h3>热门搜索</h3>
    <div class="search-rec">
       <a :href="specialurl" class="special-k">{{specialname}}</a>
        <a @click="search(item.name)" v-for="item in searchlist" :key="item.id" class="normal-k" >{{item.name}}</a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          searchlist:'',
          specialname: '',
          specialurl: '',
          searchkey: ''
      }
  },
  created () {
      this.searchrequest();
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
                this.searchkey = item;
                if (res.status == 200) {
                    //搜索
                    // this.searchlist = res.data.data.data.hotkey.slice(0, 10).map((item, index) => ({
                    //     name: item.k,
                    //     num: item.n,
                    // }));
                    // this.specialname = res.data.data.data.special_key;
                    // this.specialurl = res.data.data.data.special_url;
                    console.log(res.data.data.songList);
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
    margin-top: 6.8rem;
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
</style>
