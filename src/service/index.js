import axios from 'axios'
import config from './config'

export default{
  submitClaim (requestData) {
    let requestConfig = config.submitClaim;
    return service(requestConfig, requestData);
  },

  login (requestData) {
    let requestConfig = config.login;
    return service(requestConfig, requestData);
  },

  overview (requestData) {
    let requestConfig = config.overview;
    return service(requestConfig, requestData)
  },

  createRequest (fnName, requestData){
      let requestConfig = config[fnName];
      return service(requestConfig, requestData)
  }
}

function service (requestConfig, requestData) {
  return axios({
    method: requestConfig.method || 'post',
    url: requestConfig.url || '',
    baseURL: "http:\/\/localhost:8080",
    data: requestData,
    timeout: 10000
  }).then((response) => {
    if (response.data.responseHeader.state === 200) {
      return response.data
    } else {
      let e = new Error()
      throw e
    }
  }).catch(e => {
    return e
  })
}

// axios request 拦截器，要判断是不是登陆操作，如果是则不起效果
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('userInfo')) {
      let token = JSON.parse(sessionStorage.getItem('userInfo')).token;
      config.headers.Authorization = token;
    }
    return config
  },
  error => {
    return Promise.reject(error);
  }
)

// axios response 拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          MessageBox.alert('您的验证信息已失效，请重新登录~', '提示', {
            confirmButtonText: '确定',
            callback: action => {
              // 清除 token 信息
              localStorage.removeItem("NR_JWT_TOKEN");
              sessionStorage.removeItem("NR-USER-INFO");
              router.replace({
                path: 'login',
                query: { redirect: router.currentRoute.fullPath }
              });
            }
          });
          break;
      }
    }
  }
)