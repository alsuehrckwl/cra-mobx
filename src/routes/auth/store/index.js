import React from 'react';
import { runInAction } from 'mobx';
import { useLocalStore, useObserver } from 'mobx-react';
import { AuthService } from 'services';
import UserModel from './model';

const AuthStore = () => {
  const store = useLocalStore(() => ({
    isLogin: false,
    info: {
      name: '',
      email: '',
      age: 0
    },
    get loginCheck() {
      const { isLogin } = store;

      return isLogin;
    },
    async login(id, password) {
      const result = await AuthService.login(id, password);

      if (!!result) {
        runInAction(() => {
          store.isLogin = true;
          store.info = new UserModel(result);
        });
      }
    },
    logout() {
      runInAction(() => {
        store.isLogin = false;
        store.info = {
          name: '',
          email: '',
          age: 0
        };
      });
    },
    getAll: async () => {
      // const [] = await Promise.all([]);
    }
  }));

  return {
    getAll: store.getAll,
    login: store.login,
    logout: store.logout,
    data: useObserver(() => {
      return {
        loginCheck: store.loginCheck,
        info: store.info
      };
    })
  };
};

export default AuthStore;
