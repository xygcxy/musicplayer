<template>
<div>
  <div class="search">
    <div class="search-title">
        <p>热门搜索</p>
    </div>
    <div class="search-rec">
        <p>鹿晗</p>
        <p>鹿晗</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          searchlist:''
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
                    // this.focuslist = res.data.data.recdata.data.focus.map((item, index) => ({
                    //     url: '',
                    //     img: item.pic,
                    // }));
                    console.log(res.data.data.data);
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
    margin-top: 4rem;
}
.search-title{
    text-align: left;
    margin-left: 1rem;
}
.search-rec{
    display: flex;
    p{
        padding: 0.3rem 1rem 0.3rem 1rem;
        margin-left: 1rem;
        border: 1px solid #eee;
        border-radius: 2rem;
        color: grey;
    }
}
</style>
