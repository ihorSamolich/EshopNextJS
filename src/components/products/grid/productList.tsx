'use client';

import React, { useEffect } from 'react';
import ProductCard from '@/components/products/card/productCard';
import { useProducts } from '@/hooks/product';
import { IQueryParameters } from '@/types/parameters.types';
interface IProductGridProps {
	selectedCategory: number;
}

const ProductGrid = ({ selectedCategory }: IProductGridProps) => {
	const query: IQueryParameters = {
		categoryId: selectedCategory,
		page: 1,
		pageCount: 8,
	};

	const { data } = useProducts(query);

	return (
		<div className='lg:col-span-3'>
			<div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Products</h2>
				<div className='flex flex-col items-center sm:grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
					{data?.map(item => <ProductCard key={item.id} {...item} />)}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
