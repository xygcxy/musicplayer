// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 首页：https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=v12&page=other&callback=GetRecomListCallback8841532875944094&rnd=8841532875944094&g_tk=829520541&jsonpCallback=GetRecomListCallback8841532875944094&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=GB2312&notice=0&platform=h5&needNewCode=0
// 最新歌曲： http://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=portal&page=album&callback=GetRecomAlbumCallback
// m站首页：https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=102993714&uin=729815936&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1498543278471
// 用户：https://c.y.qq.com/rsc/fcgi-bin/fcg_get_profile_homepage.fcg?g_tk=829520541&jsonpCallback=MusicJsonCallback11944843280841111&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205360838&ct=20&userid=729815936&reqfrom=1&reqtype=0
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
//歌单页：https://y.qq.com/n/yqq/album/002NPIfB0Z3O5c.html# 根据id定义规则
//电台: https://y.qq.com/portal/player_radio.html#id=99
//热门搜索显示：https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?g_tk=292689510&uin=729815936&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=%E5%90%8C%E4%B8%80%E7%A7%92%E5%BF%AB%E4%B9%90+TFBOYS&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1499066029186
//开机广告： https://mi.gdt.qq.com/gdt_mview.fcg?posw=640&posid=8935418777110959311&ext=%7B%22req%22%3A%7B%22jsver%22%3A%220%22%2C%22sdk_src%22%3A%22LiteSDK%22%2C%22muidtype%22%3A2%2C%22m5%22%3A%22D7CF109B-F500-4569-B2EB-AA4B4C9630CA%22%2C%22c_device%22%3A%22UnknownDevice_iPhone9%2C1%22%2C%22c_h%22%3A1334%2C%22hostver%22%3A%2244021%22%2C%22muid%22%3A%225def849504ecd30db6a929eb5df8999f%22%2C%22c_pkgname%22%3A%22com.tencent.QQMusic%22%2C%22hosttype%22%3A%22com.tencent.QQMusic%22%2C%22c_os%22%3A%22ios%22%2C%22taglist%22%3A%22%22%2C%22conn%22%3A1%2C%22c_devicetype%22%3A1%2C%22c_w%22%3A750%2C%22carrier%22%3A2%2C%22c_ori%22%3A0%2C%22c_dpi%22%3A320%2C%22sdkver%22%3A%225.7%22%2C%22postype%22%3A1%2C%22uin%22%3A%22729815936%22%2C%22tmpallpt%22%3A%22true%22%2C%22c_osver%22%3A%2210.3%22%7D%7D&count=1&posh=100&datatype=2&r=1957086113&adposcount=1&supportHttps=1
//https://mi.gdt.qq.com/gdt_mview.fcg?posw=750&posid=8719245994997175503&ext=%7B%22req%22%3A%7B%22jsver%22%3A%220%22%2C%22sdk_src%22%3A%22LiteSDK%22%2C%22muidtype%22%3A2%2C%22m5%22%3A%22D7CF109B-F500-4569-B2EB-AA4B4C9630CA%22%2C%22c_device%22%3A%22UnknownDevice_iPhone9%2C1%22%2C%22c_h%22%3A1334%2C%22hostver%22%3A%2244021%22%2C%22muid%22%3A%225def849504ecd30db6a929eb5df8999f%22%2C%22c_pkgname%22%3A%22com.tencent.QQMusic%22%2C%22hosttype%22%3A%22com.tencent.QQMusic%22%2C%22c_os%22%3A%22ios%22%2C%22taglist%22%3A%22%22%2C%22conn%22%3A1%2C%22c_devicetype%22%3A1%2C%22c_w%22%3A750%2C%22carrier%22%3A2%2C%22c_ori%22%3A0%2C%22c_dpi%22%3A320%2C%22sdkver%22%3A%225.7%22%2C%22postype%22%3A4%2C%22uin%22%3A%22729815936%22%2C%22tmpallpt%22%3A%22true%22%2C%22c_osver%22%3A%2210.3%22%7D%7D&count=1&posh=1334&datatype=2&r=3242686558&adposcount=1&supportHttps=1
//客户端配置：https://y.qq.com/m/client/config/url.json?r=16842
//搜索全部：https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=63597599438890766&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w=%E7%8E%8B%E5%8A%9B%E5%AE%8F&g_tk=371009976&jsonpCallback=searchCallbacksong3246&loginUin=729815936&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
import Vue from 'vue'
import App from './App'
import router from './router'
import vux from 'vux'
import axios from 'axios'
import store from './store/store'

Vue.use(axios)
Vue.prototype.Axios = axios
Vue.prototype.shorten = function (num, fix) {
    var n = num>0 ? num : -num;
    fix==null && (fix = 1);
    //1万以内
    if (n<1E4) {
      return String(num);
    }
    //1亿以内
    if (n<1E8) {
      return (num/1E4).toFixed(fix)+'万';
    }
    return (num/1E8).toFixed(fix)+'亿';
}
Vue.prototype.formatVideoDuration = function (duration) {
		duration = parseInt(duration, 10) || 0;
		var h = Math.floor(duration / 3600),
			m = Math.floor((duration % 3600) / 60),
			s = duration % 60;
		return (h ? h+':' : '')+(m>9 ? m : '0'+m)+':'+(s>9 ? s : '0'+s);
}
Vue.prototype.throttle = function (handle, delay, time) {
  var timer = null;
  var previous = new Date();

  return function () {
    var now = new Date();
    if (time && (now - previous) >= time) {
      handle();
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(handle, delay || 100);
    }
  }
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
