// src/infrastructure/api/axiosClient.ts

import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

const API_BASE_URL = 'https://api.coinlore.net/api';

class AxiosClient {
  private client: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    this._initializeInterceptors();
  }

  private _initializeInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      config => {
        // Ejemplo: adjuntar token si lo tuvieras
        // const token = AuthService.getToken();
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      error => Promise.reject(error),
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      error => {
        // Manejo global de errores
        // console.error('[API ERROR]', error.response || error.message);
        return Promise.reject(error);
      },
    );
  }

  // Métodos auxiliares si los necesitas
  public get<T = any>(url: string, config?: AxiosRequestConfig) {
    return this.client.get<T>(url, config).then(res => res.data);
  }

  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.post<T>(url, data, config).then(res => res.data);
  }

  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return this.client.put<T>(url, data, config).then(res => res.data);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return this.client.delete<T>(url, config).then(res => res.data);
  }
}

export const apiClient = new AxiosClient();
