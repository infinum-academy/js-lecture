import {computed, observable} from 'mobx';

class AppStore {
  @observable _shows = [];

  @computed
  get shows() {
    return [];
  }
}

export default new AppStore();
