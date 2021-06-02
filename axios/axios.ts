import axios from 'axios';
import store from '@redux/store';

const isDev = process.env.NODE_ENV === 'development';
const url = isDev
  ? 'http://10.10.11.228:5001'
  : 'https://apinodev2.caroom.co.kr';
// const url = 'https://apinodev2.caroom.co.kr';
//
// const url = 'http://10.10.11.228:5001';
// console.log(`run on ${__DEV__ ? 'development' : 'production'}`);
const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(async (request) => {
  // console.log(request);
  // token 체크
  if (isDev) {
    console.log('request! ----->>', request.method, request.url);
  }
  let access_token;
  if (typeof window !== "undefined") {
    access_token = window.localStorage.getItem('access_token');
  }
  if (access_token) {
    request.headers.Authorization = `Bearer ${access_token}`;
  }
  return request;
});

// instance.defaults.validateStatus = () => true;
instance.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const errorAPI = error.config;
    const {url, status} = errorAPI;
    const {message} = error;
    if (
      (error.response?.data.statusCode === 401 ||
        message === 'Request failed with status code 401') &&
      errorAPI.retry === undefined &&
      url !== '/account/login'
    ) {
      errorAPI.retry = true;
      const access_token = await refreshToken();
      if (access_token) {
        errorAPI.headers.Authorization = `Bearer ${access_token}`;
        errorAPI.retry = undefined;
      } else {
        // 리프레시토큰으로 토큰재발급 실패 시
      }
      return await instance(errorAPI);
    }
    return Promise.reject(error);
  },
);

const refreshToken = async () => {
  // console.log('refreshToken');
  const refresh_token = window.localStorage.getItem('refresh_token');
  const id = window.localStorage.getItem('id');
  try {
    if (refresh_token && id) {
      const params = {
        id,
        refresh_token,
      };

      const resData = await instance.post('/account/refreshToken', params);
      if (resData.status === 201) {
        const {data} = resData;
        // await store.dispatch(actions.setLoggedIn(true));
        window.localStorage.setItem('access_token', data.access_token);
        window.localStorage.setItem('id', String(id));
        // console.log(data.access_token, 'access_token 갱신');
        return data.access_token;
      } else {
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('refresh_token');
        window.localStorage.removeItem('id');
        return null;
      }
    } else {
      window.localStorage.removeItem('access_token');
      window.localStorage.removeItem('refresh_token');
      window.localStorage.removeItem('id');
      return null;
    }
  } catch (err) {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');
    window.localStorage.removeItem('id');
    return null;
  }
};

export default instance;
