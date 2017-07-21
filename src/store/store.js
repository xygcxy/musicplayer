import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
import mutations from './mutation'

vue.use(vuex);
export default new vuex.Store({
    state: {
        searchkey: '',
        src: '',
        isPlay: false,
        songname: '',
        singer: '',
        cover: '',
        interval: '',
        coversmall: '',
        reslist: '',
        clientHeight: '',
        showfootplay: false,
        showheader: true,
        isshow: true,
        showFooter: true,
        hotsearch: true,
        showplay: true,
    },
    actions,
    mutations,
    getters: {
        getsearchkey(state, item) {
            // state.searchkey = item;
            return state.searchkey;
        }
    }
})