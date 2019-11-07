import {InjectionToken} from 'dependable-react';

import ApiService from '../services/apiService';

export const API_SERVICE_TOKEN = new InjectionToken(ApiService);
