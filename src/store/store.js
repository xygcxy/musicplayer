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
        isshow: true,
        showFooter: true,
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