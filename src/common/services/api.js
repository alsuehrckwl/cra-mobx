import axios from 'axios';
import cookie from 'utils/cookie';
import { StringUtil } from 'utils/stringUtil';

class Api {
  jwtAjax(method, apiUrl, url, data) {
    if (method === 'get' || method === 'delete') {
      let queryString = StringUtil.querystringConvert(data);

      if (!!queryString) {
        url += '?';
        url += StringUtil.querystringConvert(data);
      }
    }

    const axiosResult = !data
      ? axios[method](`${apiUrl}${url}`, {
          headers: {
            Authorization: `Bearer ${cookie.getCookie('access_token')}`,
            'content-type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        })
      : axios[method](`${apiUrl}${url}`, data, {
          headers: {
            Authorization: `Bearer ${cookie.getCookie('access_token')}`,
            'content-type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        });

    const result = axiosResult
      .then((res) => {
        return res.status === 200
          ? {
              code: res.status,
              data: res.data
            }
          : {};
      })
      .catch((err) => {
        let data = {};

        if (!err || !err.response) {
          return {};
        }

        switch (err.response.status) {
          case 400:
            data = err.response.data;
            break;
          case 401:
            data = { code: 401, message: '인증 오류' };
            break;
          default:
            data = { code: 500, message: '서버 오류입니다.' };
            break;
        }
        return data;
      });

    return result;
  }
}

export default Api;
