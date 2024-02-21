import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IApiClientConfig extends AxiosRequestConfig {
	baseURL: string;
}

export const apiClient: AxiosInstance = axios.create({
	baseURL: 'https://ihor.fun',
} as IApiClientConfig);
