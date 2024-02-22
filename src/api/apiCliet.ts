import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
const URL = process.env.NEXT_PUBLIC_BASE_URL;

interface IApiClientConfig extends AxiosRequestConfig {
	baseURL: string;
}

export const apiClient: AxiosInstance = axios.create({
	baseURL: URL,
} as IApiClientConfig);
