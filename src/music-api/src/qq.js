'use strict'
/*
 * php api => https://github.com/metowolf/TencentMusicApi/blob/master/TencentMusicAPI.php
 */
const querystring = require('querystring');
const origin = 'http://y.qq.com/';
const S = require('string');
const fetch = require('node-fetch');

const header = {
  Origin: origin,
  Referer: origin,
}

const getSongNew = (mid, sizekey) => {
  return new Promise((resolve, reject) => {
    let guid = Math.floor(Math.random()*1000000000);
    fetch(`https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=${guid.toString()}`)
      .then(res => res.text())
      .then(text => {
        text = text.replace('jsonCallback(', '').trim();
        text = text.substr(0, text.length - 2);
        return Promise.resolve(JSON.parse(text));
      })
      .then(json => {
        let key = json.key;
        let perfix = '';
        if(sizekey === 'size128'){
          perfix = 'M500';
        } else if(sizekey === 'size320'){
          perfix = 'M800';
        }
        let url = `http://dl.stream.qqmusic.qq.com/${perfix}${mid}.mp3?vkey=${key}&guid=${guid}&fromtag=30`;
        resolve({
          success: true,
          url: url
        })
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}

const generateKey = (mid) => {
  let url = 'http://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?';
  let query = {
    'songmid': mid,
    'format': 'json'
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`)
      .then(res => res.json())
      .then(d => {
        let data = d.data[0].file;
        if(data.size_320mp3){
          resolve('size320');
        } else if(data.size_128mp3){
          resolve('size128');
        }
      })
      .catch(err => reject({
        success: false,
        message: 'QQ - 歌曲需要付费或者ID错误!'
      }))
  });
}

const getTop = (topid, raw) => {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?';
  let query = {
    'type': 'top',
    'topid': topid,
    'format': 'json'
  };
  return new Promise((resolve,reject) => {
    fetch(`${url}${querystring.stringify(query)}`)
      .then(res => res.json())
      .then(d => {
        if(raw){
          resolve(d);
        } else {
          let songList = d.songlist.map(item => {
              return {
                album: {
                  id: item.data.albummid,
                  cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.data.albummid}.jpg`,
                  coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.data.albummid}.jpg`,
                  coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.data.albummid}.jpg`,
                  name: item.data.albumname
                },
                artists: item.data.singer.map(i => {return {id: i.mid, name: i.name}; }),
                name: item.data.songname,
                id: item.data.songmid,
                needPay: item.data.pay.payplay > 0 ? true : false,
              };
            });
            let obj = {
              success: true,
              total: d.total_song_num,
              songList: songList,
              topInfo: d.topinfo
            };
            console.log(obj);
            resolve(obj);
        }
      })
      .catch(err => reject({
        success: false,
        message: err
      }));
  })
}

const getHomeData = () => {
  let url = `https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=v12&page=other&platform=h5`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        if(text.substr(0, 17) === 'MusicJsonCallback'){
          text = text.replace('MusicJsonCallback(', '');
          let json = JSON.parse(text.substr(0, text.length - 1));
        resolve(json)
        }
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}


const getSong = (mid, raw) => {
  return new Promise((resolve, reject) => {
    generateKey(mid)
      .then(size => getSongNew(mid, size))
      .then(data => resolve(data))
      .catch(err => reject(err))
  });
}

const searchSong = (key, limit, page, raw) => {
  let url = 'http://c.y.qq.com/soso/fcgi-bin/search_cp?';
  let query = {
    'p': page,
    'n': limit,
    'w': key,
    'aggr': 1,
    'lossless': 1,
    'cr': 1
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      mode: 'no-cors'
    })
      .then(res => res.text())
      .then(text => {
        if(text.substr(0, 8) === 'callback'){
          text = text.replace('callback(', '');
          let json = JSON.parse(text.substr(0, text.length - 1));
          if(!raw){
            let songList = json.data.song.list.map(item => {
              return {
                album: {
                  id: item.albummid,
                  cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg`,
                  coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.albummid}.jpg`,
                  coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.albummid}.jpg`,
                  name: item.albumname
                },
                artists: item.singer.map(i => {return {id: i.mid, name: i.name}; }),
                name: item.songname,
                id: item.songmid,
                interval: item.interval,
                needPay: item.pay.payplay > 0 ? true : false,
              };
            });
            let obj = {
              success: true,
              total: json.data.song.totalnum,
              songList: songList
            };
            resolve(obj);
          } else {
            resolve(json);
          }
        }
      })
      .catch(err => reject({
        success: false,
        message: err
      }));
  });
};

const searchPlaylist = (key, limit, page, raw) => {
  let url = `https://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist?`;
  let query = {
    remoteplace: 'txt.yqq.center',
    searchid: Math.floor(Math.random()*96551345134513451).toString(),
    page_no: page-1,
    num_per_page: limit,
    query: key,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      },
    })
      .then(res => res.json())
      .then(d => {
        if(raw){
          resolve(d.data);
        } else {
          let json = d.data;
          let playlists = json.list.map(item => {
            let originCover = item.imgurl.replace('http://', 'https://');
            return {
              id: item.dissid,
              cover: originCover.substr(0, originCover.length - 4) + '/300',
              coverBig: originCover.substr(0, originCover.length - 4) + '/600',
              coverSmall: originCover.substr(0, originCover.length - 4) + '/150',
              name: S(item.dissname).decodeHTMLEntities().stripTags().s,
              author: {
                name: item.creator.name,
                id: parseInt(item.creator.creator_uin),
                avatar: item.creator.avatarUrl
              }
            }
          });
          let obj = {
            success: true,
            total: json.sum,
            playlists: playlists
          }
          resolve(obj);
        }
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}

const searchAlbum = (key, limit, page, raw) => {
  let url = 'https://c.y.qq.com/soso/fcgi-bin/search_cp?';
  let query = {
    remoteplace: 'txt.yqq.album',
    searchid: Math.floor(Math.random()*96551345134513451).toString(),
    //如果这里选1只搜索有无损的
    lossless: 0,
    p: page,
    n: limit,
    w: key,
    //应该是某种type的意思，不太懂
    t: 8,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      }
    })
      .then(res => res.json())
      .then(d => {
        if(raw){
          resolve(d.data);
        } else {
          let json = d.data.album;
          let albumList = json.list.map(item => {
            return {
              id: item.albumMID,
              cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albumMID}.jpg`,
              coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.albumMID}.jpg`,
              coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.albumMID}.jpg`,
              name: item.albumName,
              artist: {
                name: item.singerName,
                id: item.singerMID
              }
            }
          });
          let obj = {
            success: true,
            total: json.totalnum,
            albumList: albumList
          };
          resolve(obj);
        }
      })
      .catch(err => reject({
        success: false,
        err: err || 'problem in search qq album, try query with raw=true'
      }))
  });
}

const getAlbum = (mid, raw) => {
  let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?';
  let query = {
    albummid: mid,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      },
    })
      .then(res => res.json())
      .then(d => {
        if(raw){
          resolve(d)
        }
        let ab = d.data;
        let songList = ab.list.map(item => {
          return {
            id: item.songmid,
            name: item.songname,
            needPay: item.pay.payplay > 0 ? true : false,
            artists: item.singer.map(i => {return{id: i.mid, name: i.name}}),
            album: {
              name: ab.name,
              id: ab.mid,
              cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${ab.mid}.jpg`,
              coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${ab.mid}.jpg`,
              coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${ab.mid}.jpg`,
            }
          }
        });
        let obj = {
          success: true,
          name: ab.name,
          id: ab.mid,
          cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${ab.mid}.jpg`,
          coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${ab.mid}.jpg`,
          coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${ab.mid}.jpg`,
          artist: {
            name: ab.singername,
            id: ab.singermid
          },
          songList: songList
        };
        resolve(obj);
      })
      .catch(err => reject({
        success: false,
        message: 'no qq album found with current id, please try with raw=true !'
      }))
  });
}

const getPlaylist = (disstid, raw) => {
  let url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?';
  let query = {
    type: 1,
    json: 1,
    utf8: 1,
    // onlysong: 1,
    disstid: disstid,
    format: 'json',
    pic: 500,
    inCharset: 'utf8',
    outCharset: 'utf-8',
    platform: 'yqq'
  };
  return new Promise((resolve, reject) => {
    fetch(`${url}${querystring.stringify(query)}`, {
      headers: {
        Referer: 'https://y.qq.com/portal/search.html',
        Host: 'c.y.qq.com'
      },
    })
      .then(res => res.json())
      // .then(text => {
      //   text = text.substr(13);
      //   text = text.substr(0, text.length - 1);
      //   return Promise.resolve(JSON.parse(text));
      // })
      .then(pl => {
        if(raw){
          resolve(pl);
        }
        pl = pl.cdlist[0];
        let songList = pl.songlist.map(item => {
          return {
            id: item.songmid,
            name: item.songname,
            interval: item.interval,
            artists: item.singer.map(i => {return{id: i.mid, name: i.name}}),
            needPay: item.pay.payplay > 0 ? true : false,
            album: {
              id: item.albummid,
              cover: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg`,
              coverBig: `https://y.gtimg.cn/music/photo_new/T002R500x500M000${item.albummid}.jpg`,
              coverSmall: `https://y.gtimg.cn/music/photo_new/T002R150x150M000${item.albummid}.jpg`,
              name: item.albumname
            }
          }
        });
        let obj = {
          success: true,
          name: pl.dissname,
          id: pl.disstid,
          cover: pl.logo,
          author: {
            id: pl.uin || null,
            name: pl.nickname || null,
            avatar: null
          },
          desc: pl.desc,
          tags: pl.tags,
          visitnum: pl.visitnum,
          songList: songList
        };
        resolve(obj);
      })
      .catch(err => reject({
        success: false,
        message: 'your qq playlist id is not correct or data mapping is not correct, try query with raw=true'
      }))
  });
}

//网页版搜索建议
const searchSuggestion = (key) => {
  let url = `https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?format=json&key=${key}&platform=yqq`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}

const getnewalbum = () => {
  let url = `http://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg?format=jsonp&tpl=portal&page=album&callback=GetRecomAlbumCallback`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        if(text.substr(0, 17) === 'MusicJsonCallback'){
          text = text.replace('MusicJsonCallback(', '');
          let json = JSON.parse(text.substr(0, text.length - 1));
        resolve(json)
        }
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}

const hotSearch = () => {
  let url = `https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=292689510&uin=729815936&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1499064058029`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        let json = JSON.parse(text.substr(0, text.length - 1));
        resolve(json);
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  });
}

const getTopAll = () => {
  let url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_opt.fcg?page=index&format=html&v8debug=1`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.text())
      .then(text => {
        text = text.replace('jsonCallback(', '');
        let json = JSON.parse(text.substr(0, text.length - 1));
        resolve(json);
      })
      .catch(err => reject({
        success: false,
        message: err
      }))
  })
}

module.exports = {
  searchSong: searchSong,
  searchPlaylist: searchPlaylist,
  searchAlbum: searchAlbum,
  getSong: getSong,
  getTop: getTop,
  getTopAll: getTopAll,
  getHomeData: getHomeData,
  getAlbum: getAlbum,
  hotSearch: hotSearch,
  getnewalbum: getnewalbum,
  getPlaylist: getPlaylist,
  searchSuggestion: searchSuggestion,
};
