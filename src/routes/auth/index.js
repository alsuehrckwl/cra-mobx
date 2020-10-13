import React from 'react';
import AuthStore from './store';
import style from './style.module.scss';

const Auth = () => {
  const { login, logout, data } = AuthStore();

  const onClickLogin = () => {
    login('kim', 1234);
  };

  const onClickLogout = () => {
    logout();
  };

  return (
    <div className={style.login}>
      {data.loginCheck ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
      <h1>
        {data.loginCheck
          ? `안녕하세요 ${data.info.userInfo.name}(${data.info.userInfo.email}/${data.info.userInfo.age})`
          : '로그인하세요'}
      </h1>
    </div>
  );
};

export default Auth;
