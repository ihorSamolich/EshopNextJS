import React, { Suspense } from 'react';
import Link from 'next/link';
import Carousel from '@/components/carousel/carousel';
import { productService } from '@/services/product.service';

// interface IHotSalesProps {
// 	products: IProduct[];
// }
const HotSales = async () => {
	const hotProducts = await productService.getProductHotSales();

	return (
		<section className='bg-white rounded-md mx-auto max-w-2xl py-8 lg:max-w-7xl px-5 mt-5 md-hidden hidden md:block'>
			<div className='flex gap-5'>
				<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
					Гарячі пропозиції
				</h2>
				<Link
					href={'/products'}
					className='text-sm tracking-tight text-blue-700 hover:text-blue-400'
				>
					Більше товарів
				</Link>
			</div>
			<Carousel products={hotProducts} />
		</section>
	);
};

export default HotSales;
