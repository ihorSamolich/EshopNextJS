import { apiClient } from '@/api/apiCliet';
import {
	IProduct,
	IProductCreate,
	IProductResponse,
} from '@/types/product.types';
import { IQueryParameters } from '@/types/parameters.types';

class ProductService {
	async getProductSales() {
		const response = await apiClient.get<IProduct[]>('/api/products/hot-sales');
		return response.data;
	}

	async getProducts(query: IQueryParameters) {
		const response = await apiClient.get<IProductResponse>('/api/products', {
			params: query,
		});
		return response.data;
	}

	async createProduct(product: IProductCreate) {
		const response = await apiClient.post('/api/products', product, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
		return response.data;
	}
}

export const productService = new ProductService();
