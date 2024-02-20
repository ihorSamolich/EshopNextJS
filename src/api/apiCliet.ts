import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IApiClientConfig extends AxiosRequestConfig {
	baseURL: string;
}

export const apiClient: AxiosInstance = axios.create({
	baseURL: 'http://ihor.fun',
} as IApiClientConfig);
