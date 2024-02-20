import { apiClient } from '@/api/apiCliet';
import { IProduct, IProductResponse } from '@/types/product.types';

class ProductService {
	async getProductHotSales() {
		const response = await apiClient.get<IProduct[]>('/api/products/hot-sales');
		return response.data;
	}

	async getProducts(categoryId?: string) {
		const response = await apiClient.get<IProductResponse>(`/api/products`);
		return response.data.items;
	}
}

export const productService = new ProductService();
