export default{
  login (state, userInfo) {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  overviewList (state, overviewInfo) {
    for(let item in overviewInfo){
      if(item != 'token'){
        let detail = {
          title: item, isCompleted: overviewInfo[item]
        }
        state.overviewList.push(detail);       
      }
    }
  }
}
