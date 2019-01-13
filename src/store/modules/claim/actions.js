import httpRequest from '../../../service/index'

export default{
  async addClaim ({commit}, claimData) {
    try {
      let response = await httpRequest.createRequest('claim', claimData)
      if (response.data) {
        commit('addClaim', {claimData})
      }
    } catch (response) {
      // why cant catch the error
      console.log(response)
    }
  },
  async getClaimed ({commit}, requestInfo) {
    try {
      let response = await httpRequest.createRequest('getClaimed', requestInfo)
      if (response.data) {
        commit()
      }
    } catch (response) {
      // why cant catch the error
      console.log(response)
    }
  }, 
}
