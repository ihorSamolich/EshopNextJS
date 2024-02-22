'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/services/product.service';
import { IProductCreate, IProductResponse } from '@/types/product.types';

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

export const useCreateProduct = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: IProductCreate) => productService.createProduct(data),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['products'] });
		},
	});
};
