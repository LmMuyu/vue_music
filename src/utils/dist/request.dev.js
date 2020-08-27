"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function request(config) {
  var Axios = _axios["default"].create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: {}
  });

  Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  Axios.interceptors.response.use(function (response) {
    // Do something before response is sent
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  return Axios(config);
}