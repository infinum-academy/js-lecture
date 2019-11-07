/* eslint-disable class-methods-use-this */
import {inject} from 'dependable-react';

import AppStore from '../store/AppStore';
import { API_SERVICE_TOKEN } from '../consts/injectTokens';

class ShowService {
  async load() {
    const apiService = inject(API_SERVICE_TOKEN);
    const appStore = inject(AppStore);

    const { data } = await apiService.get('shows');
    appStore.shows.replace(data);
  }
}

export default ShowService;
