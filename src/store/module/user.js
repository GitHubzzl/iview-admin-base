export default {
  state:{
    userName:'',
    term:'2019上',
    school:'',
    friends:['zhangsan','lihua','wuyuanyuan']
  },
  getters:{
    friendsLen:(state) => state.friends.length
  },
  mutations:{
    updateTerm(state,value){
      state.term = value
    }
  }
}



