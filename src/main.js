// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 首页：https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=v12&page=other&callback=GetRecomListCallback8841532875944094&rnd=8841532875944094&g_tk=829520541&jsonpCallback=GetRecomListCallback8841532875944094&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=h5&needNewCode=0
// m站首页：https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=102993714&uin=729815936&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1498543278471
// MV API: https://c.y.qq.com/v8/fcg-bin/getmv_by_tag?g_tk=829520541&jsonpCallback=getMvlist&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&utf8=1&type=2&year=0&area=0&tag=0&pageno=0&pagecount=20&otype=json&taglist=1&_=0.5427620757947527
// 歌单api： https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?rnd=0.07308062143992289&g_tk=829520541&jsonpCallback=getPlaylist&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29
// 歌单分类：https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_tag_conf.fcg?g_tk=829520541&jsonpCallback=getPlaylistTags&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
// 排行榜首页：https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg?page=index&format=html&tpl=macv4&v8debug=1&jsonCallback=jsonCallback
// 排行榜福特流行：https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2017-06-27&topid=4&type=top&song_begin=0&song_num=30&g_tk=829520541&jsonpCallback=MusicJsonCallbacktoplist&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
// 搜索建议： https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=829520541&jsonpCallback=hotSearchKeysmod_top_search&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
// 专辑首页：https://c.y.qq.com/v8/fcg-bin/album_library?g_tk=829520541&jsonpCallback=GetAlbumListJsonCallback&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cmd=firstpage&page=0&pagesize=20&sort=1&language=-1&genre=0&year=1&pay=0&type=-1&company=-1
// 歌手首页：https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=829520541&jsonpCallback=GetSingerListCallback&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
// 歌手内地：https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=cn_man_all&pagesize=100&pagenum=1&g_tk=829520541&jsonpCallback=GetSingerListCallback&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
// 活动：https://y.qq.com/vipportal/json/activity/act_0.json?_=1498638624637&loginUin=o0729815936&hostUin=0&format=jsonp&inCharset=GB2312&outCharset=utf-8&notice=0&platform=musicvip&jsonpCallback=MusicJsonCallback&needNewCode=0
import Vue from 'vue'
import App from './App'
import router from './router'
import vux from 'vux'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
