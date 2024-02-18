import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (confing) {
    console.log("요청합니다.");
    return confing;
  },
  function (error) {
    console.log("요청 오류");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  function (response) {
    console.log("응답입니다.");
    return response;
  },
  function (error) {
    console.log("응답 오류");
    return Promise.reject(error);
  }
);

export default api;
