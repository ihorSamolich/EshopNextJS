'use client';

import React, { useEffect } from 'react';
import ProductCard from '@/components/products/card/productCard';
import { useProducts } from '@/hooks/product';
import { IQueryParameters } from '@/types/parameters.types';
import Pagination from '@/components/pagination/pagination';

interface IProductGridProps {
	selectedCategory: number;
	currentPage: number;
}

const ProductGrid = ({ selectedCategory, currentPage }: IProductGridProps) => {
	const query: IQueryParameters = {
		categoryId: selectedCategory,
		page: currentPage,
		pageCount: 6,
	};

	const { data } = useProducts(query);

	return (
		<div className='lg:col-span-3'>
			<div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Products</h2>
				<div className='flex flex-col items-center sm:grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
					{data?.items?.map(item => <ProductCard key={item.id} {...item} />)}
				</div>
				<div className='flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
					<Pagination
						currentPage={query.page}
						count={data?.count || 0}
						pageCount={query.pageCount}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
