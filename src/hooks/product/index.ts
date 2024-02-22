'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/services/product.service';
import { IProductCreate, IProductResponse } from '@/types/product.types';
import { IQueryParameters } from '@/types/parameters.types';

export const useProducts = (query: IQueryParameters) => {
	return useQuery({
		queryKey: ['products', query],
		queryFn: () => productService.getProducts(query),
		staleTime: 0,
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
