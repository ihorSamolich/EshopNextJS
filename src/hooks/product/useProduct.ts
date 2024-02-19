'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { productService } from '@/services/product.service';
import { IProduct } from '@/types/product.types';

export function useProduct(categoryId?: string) {
	const { data, refetch } = useQuery({
		queryKey: ['products'],
		queryFn: () => productService.getProducts(categoryId),
	});

	useEffect(() => {
		refetch();
	}, [categoryId, refetch]);

	return { data };
}
