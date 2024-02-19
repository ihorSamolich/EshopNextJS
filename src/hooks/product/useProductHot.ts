'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { productService } from '@/services/product.service';
import { IProduct } from '@/types/product.types';

export function useProductHot() {
	const { data } = useQuery({
		queryKey: ['hot-products'],
		queryFn: () => productService.getProductHotSales(),
	});

	const [items, setItems] = useState<IProduct[]>(data || []);

	useEffect(() => {
		if (data) {
			setItems(data);
		}
	}, [data]);

	return { items, setItems };
}
