# musicplayer
vue musicplayer
# Introduction
NodeJS + Vue 实现的音乐播放器（防QQ音乐APP）

NodeJS技术栈: Koa1

Vue技术栈: Vue2, Vuex, Vux

作为音乐发烧友，虽然经常用网易云音乐来听歌，不过QQ音乐的界面我挺喜欢的，最近想学学Vue，所以就拿这个练手。</br>
之前只看过文档，这次使用vue来构建页面，接口使用了music-api模块，部分接口通过对QQ音乐PC网页及M端网页进行分析得来自己添加到music-api模块中，使用Koa来封装接口提供给vue使用。</br>
第一次使用vue写项目，有些vue特性还没用到，正在学习中，努力优化代码中。<br/>

# 查看Demo
    git clone git@github.com:xygcxy/musicplayer.git
    cd musicplayer

    # install dependencies
    npm install
    cd musicplayer/src/
    cp music-api ../node_modules/

    #serve start
    cd server/
    node app.js

    # serve with hot reload at localhost:8080
    npm run dev
# 效果图
![alt text](./src/assets/demo.gif "Demo")

# 任务
## 已实现的功能:

- [x] 我的页面（纯静态，无登录功能）
- [x] 音乐馆（部分模块跟App不一样）
- [x] 搜索
- [x] 播放页
- [x] 发现（无数据）

## 未来需要实现的功能:

- [ ] 搜索页内容丰富
- [ ] 代码优化（vuex管理）
- [ ] 播放控制优化
- [ ] 下载
- [ ] 喜欢
- [ ] 播放列表
- [ ] 播放循环
- [ ] 登录（做不到啊T^T）
- [ ] 发现（找不到接口T^T）






