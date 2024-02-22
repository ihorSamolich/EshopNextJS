import { apiClient } from '@/api/apiCliet';
import {
	IProduct,
	IProductCreate,
	IProductResponse,
} from '@/types/product.types';

class ProductService {
	async getProductSales() {
		const response = await apiClient.get<IProduct[]>('/api/products/hot-sales');
		return response.data;
	}

	async getProducts() {
		const response = await apiClient.get<IProductResponse>(`/api/products`);
		return response.data.items;
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
