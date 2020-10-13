import { observable, action, runInAction } from 'mobx';

class CommonStore {
  @observable
  title = '';

  @action
  setTitle(title) {
    runInAction(() => {
      this.title = title;
    });
  }
}

export default CommonStore;
