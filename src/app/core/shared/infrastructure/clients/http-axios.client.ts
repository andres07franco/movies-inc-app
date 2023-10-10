import { HttpClient } from '../../domain/interfaces/http.client';
import axios, { AxiosResponse } from 'axios';

export class HttpAxionClient implements HttpClient {
  constructor(
    private urlBase: string,
    private accessToken: string,
  ) {}
  async get<T>(path: string): Promise<T> {
    try {
      const url = `${this.urlBase}/${path}`;
      const headers = {
        Authorization: `Bearer ${this.accessToken}`,
      };
      const response: AxiosResponse = await axios.get(url, {
        headers,
      });
      return response.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error Code:', error.response?.status);
        console.error('Result Data:', error.response?.data);
      }
      throw error;
    }
  }

  async post<T>(path: string, data: any): Promise<T> {
    try {
      const url = `${this.urlBase}/${path}`;
      const headers = {
        Authorization: `Bearer ${this.accessToken}`,
      };
      const response = await axios.post(url, data, { headers });
      return response.data as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Error Code:', error.response?.status);
        console.log('Result Data:', error.response?.data);
      }
      throw error;
    }
  }
}
