import { apiClient } from '@/api/apiCliet';
import { IProduct, IProductResponse } from '@/types/product.types';

class ProductService {
	async getProductSales() {
		const response = await apiClient.get<IProduct[]>('/api/products/hot-sales');
		return response.data;
	}

	async getProducts() {
		const response = await apiClient.get<IProductResponse>(`/api/products`);
		return response.data.items;
	}
}

export const productService = new ProductService();
