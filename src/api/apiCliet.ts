import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IApiClientConfig extends AxiosRequestConfig {
	baseURL: string;
}

export const apiClient: AxiosInstance = axios.create({
	baseURL: 'http://localhost:5135',
} as IApiClientConfig);
