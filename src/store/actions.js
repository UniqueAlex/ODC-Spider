import httpRequest from '../service/index'

export default{
  async login ({commit}, loginInfo) {
    try{
      let response = await httpRequest.createRequest('login', loginInfo)
      if(response.userInfo){
        commit('login', response.userInfo);

        return new Promise((resolve, reject) => {
          resolve(response.userInfo);
        })
      }
    } catch(e) {

    }
  },

  async overview ({commit}, userId) {
    let response = await httpRequest.createRequest('overview', userId)
    if(response.overview){
      commit('overviewList', response.overview)
    }
  }
}
