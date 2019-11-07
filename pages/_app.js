/* eslint-disable new-cap */
import App from 'next/app';
import {DefineModule} from 'dependable-react';

import ApiService from '../services/apiService';
import ShowService from '../services/showService';
import AppStore from '../store/AppStore';
import { API_SERVICE_TOKEN } from '../consts/injectTokens';

DefineModule([
  {
    provider: API_SERVICE_TOKEN,
    initClass: ApiService,
  },
  AppStore,
  ShowService,
]);

export default App;
