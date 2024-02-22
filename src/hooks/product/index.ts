'use client';

import { useQuery } from '@tanstack/react-query';
import { productService } from '@/services/product.service';

export const useProducts = () => {
	return useQuery({
		queryKey: ['products'],
		queryFn: () => productService.getProducts(),
		staleTime: Infinity,
	});
};

export const useProductsSales = () => {
	return useQuery({
		queryKey: ['products-sales'],
		queryFn: () => productService.getProductSales(),
		staleTime: Infinity,
	});
};
