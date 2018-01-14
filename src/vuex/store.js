import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const state = {

// }
// const mutstions = {

// }
// // const getter = {
// //   count :function(state) {
// //     return state.count += 100;
// //   }
// // }
// export default new Vuex.store ({
//   getter,mutstions,state
// })
// 定义初始化变量
const state = {
  showLoading: 'true'
}
// 定义时间处理方法
const mutations = {
  loadingIsShow (state, status) {
    state.showLoading = status;
  }
}

// 对外事件方法
const actions = {
  loadingIsShow: ({commit},status) =>commit('loadingIsShow', status),
}

export default new Vuex.Store ({
  status,
  mutations,
  actions
})
