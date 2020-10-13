import CommonStore from './common.store';

class RootStore {
  constructor() {
    this.commonStore = new CommonStore(this);
  }
}

export default RootStore;
