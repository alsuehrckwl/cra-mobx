import React from 'react';
import useCommonStore from 'hooks/useCommonStore';
import style from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const Main = observer(() => {
  const store = useCommonStore();

  useEffect(() => {
    store.setTitle('create-react-app, mobx 👋');
  }, []);

  return (
    <div className={style.container}>
      <h1>Hello World!</h1>
      <p>{store.title}</p>
    </div>
  );
});

export default Main;
