export interface HttpClient {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, data: any): Promise<T>;
}
