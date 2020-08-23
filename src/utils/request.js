import axios from "axios";

function request(config) {
  let Axios = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: {}
  });

  Axios.interceptors.request.use(
    config => {
      // Do something before request is sent
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  Axios.interceptors.response.use(
    response => {
      // Do something before response is sent
      return response;
    },
    error => {
      // Do something with response error
      return Promise.reject(error);
    }
  );
}
