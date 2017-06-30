var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')({formLimit: '3mb'});
var MusicApi = require('music-api');

router.get('/api/dailysuggest', function*() {
    var data = yield MusicApi.getDailySuggest();
    this.body = data && {data: data};
})

router.get('/api/homedata', function*() {
    var data = yield {recdata: MusicApi.getHomeData(), newsongrec: MusicApi.getnewalbum()};
    this.body = data && {data: data};
})

router.get('/api/searchsuggest/:key', function*() {
    let vendor = this.params.key;
    var data = yield MusicApi.searchSuggestion(key);
    this.body = data && {data: data};
})

router.get('/api/search/song/:vendor', function* (){
    let vendor = this.params.vendor;
    var data = yield MusicApi.searchSong(vendor, this.query || {});
    this.body = data && {data: data};
});

router.get('/api/search/album/:vendor', function*() {
    let vendor = this.params.vendor;
    var data = yield MusicApi.searchAlbum(vendor, this.query || {});
    this.body = data && {data: data};
});

router.get('/api/top/:topid', function*() {
    let vendor = this.params.topid;
    var data = yield MusicApi.getTop(vendor, this.query || {});
    this.body = data && {data: data};
});

router.get('/api/search/playlist/:vendor', function*() {
    let vendor = this.params.vendor;
    var data = yield MusicApi.searchPlaylist(vendor, this.query || {});
    this.body = data && {data: data};
})

router.get('/api/get/song/:vendor', function*() {
    let vendor = this.params.vendor;
    var data = yield MusicApi.getSong(vendor, this.query || {});
    this.body = data && {data: data};
});

router.get('/api/get/album/:vendor', function*() {
  let vendor = this.params.vendor;
  
    var data = yield MusicApi.getAlbum(vendor, this.query || {});
    this.body = data && {data: data};
});

router.get('/api/get/playlist/:vendor', function*() {
  let vendor = this.params.vendor;
  
    var data = yield MusicApi.getPlaylist(vendor, this.query || {});
    this.body = data && {data: data};
});

router.get('/api/suggest/album/:vendor', function*() {
    let limit = this.query.limit,
        raw = this.query.raw;
    let vendor = this.params.vendor;
    var data = yield MusicApi.getSuggestAlbums(vendor, this.query || {});
    this.body = data && {data: data};
})

//支持jsonp
app.use(function *(next) {
  yield next;
  var callback = this.query["callback"];
  if (!callback) return;
  this.type = 'text/javascript';
  var startChunk =  callback + '(';
  var endChunk = ');'
  this.body =  startChunk + JSON.stringify(this.body) + endChunk;
});

app.use(function* (next) {
	this.set('Access-Control-Allow-Origin', '*');
	yield next;
});

app.use(router.routes()).listen(3001);

console.log('Server is running at http://127.0.0.1:3001');

// 捕获漏网的异常
process.on('uncaughtException', function (err) {
	console.error('\nStat-back Uncaught Exception: '+err.stack);
});
