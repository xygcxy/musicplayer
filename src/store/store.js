import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
import mutations from './mutation'

vue.use(vuex);
export default new vuex.Store({
    state: {
        searchkey: ''
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