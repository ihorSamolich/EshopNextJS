import React from 'react';
import ProductCard from '@/components/products/card/productCard';
import { IProduct } from '@/types/product.types';
import { productService } from '@/services/product.service';

// interface IProductGridProps {
// 	products: IProduct[];
// }

const ProductGrid = async ({
	searchParams,
}: {
	searchParams?: {
		selectedCategory?: string;
	};
}) => {
	const selectedCategory = searchParams?.selectedCategory || '';
	const products = await productService.getProducts(selectedCategory);

	return (
		<div className='lg:col-span-3'>
			<div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Products</h2>
				<div className='flex flex-col items-center sm:grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
					{products?.map(item => <ProductCard key={item.id} {...item} />)}
				</div>
			</div>
		</div>
	);
};

export default ProductGrid;
