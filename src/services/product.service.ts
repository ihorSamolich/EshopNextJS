import { apiClient } from '@/api/apiCliet';
import { IProduct } from '@/types/product.types';

class ProductService {
	async getProductHotSales() {
		const response = await apiClient.get<IProduct[]>('/api/products/hot-sales');
		return response.data;
	}

	async getProducts(categoryId?: string) {
		const response = await apiClient.get<IProduct[]>(
			`/api/products${categoryId && `/category/${categoryId}`}`,
		);
		return response.data;
	}
}

export const productService = new ProductService();
