import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IApiClientConfig extends AxiosRequestConfig {
	baseURL: string;
}

export const apiClient: AxiosInstance = axios.create({
	baseURL: 'http://rozetka.ihor.fun',
} as IApiClientConfig);
