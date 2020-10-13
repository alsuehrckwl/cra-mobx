// import Url from 'environment';
import Api from './api';
import autobind from 'autobind-decorator';

@autobind
class AuthService extends Api {
  constructor() {
    super();
  }

  /**
   * @description 로그인
   * @param {*} id
   * @param {*} password
   * @returns
   */
  login(id, password) {
    // return this.ajax('post', Url.api, `/login`, { id, password });
    return { name: 'kim', email: 'kim@kim.com', age: 1 };
  }
}

export default new AuthService();
