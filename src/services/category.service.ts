import { apiClient } from '@/api/apiCliet';
import { ICategoryName } from '@/types/category.types';

class CategoryService {
	async getCategoryNames() {
		const response = await apiClient.get<ICategoryName[]>(
			'/api/categories/names',
		);
		return response.data;
	}
}

export const categoryService = new CategoryService();
