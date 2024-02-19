'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { categoryService } from '@/services/category.service';
import { ICategoryName } from '@/types/category.types';

export function useCategoryNames() {
	const { data } = useQuery({
		queryKey: ['category-names'],
		queryFn: () => categoryService.getCategoryNames(),
	});

	const [items, setItems] = useState<ICategoryName[]>(data || []);

	useEffect(() => {
		if (data) {
			setItems(data);
		}
	}, [data]);

	return { items, setItems };
}
