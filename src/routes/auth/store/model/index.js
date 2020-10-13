import autobind from 'autobind-decorator';
import { extendObservable, computed } from 'mobx';

@autobind
class UserModel {
  isLogin;

  constructor(data, isLogin) {
    extendObservable(this, data);

    this.isLogin = isLogin;
  }

  @computed
  get userInfo() {
    const { name, email, age } = this;

    return {
      name,
      email,
      age: age + 10
    };
  }
}

export default UserModel;
