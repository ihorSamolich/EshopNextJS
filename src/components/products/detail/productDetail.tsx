'use client';

import React from 'react';
import { useSingleProduct } from '@/hooks/product';
import Image from 'next/image';
import SkeletonProductDetail from '@/components/products/detail/skeletonProductDetail';
const URL = process.env.NEXT_PUBLIC_BASE_URL;

interface IProductDetail {
	id: number;
}

const ProductDetail = ({ id }: IProductDetail) => {
	const { data, isSuccess } = useSingleProduct(id);

	return isSuccess ? (
		<div className='bg-white mx-auto pt-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row -mx-4'>
					<div className='md:flex-1 px-4'>
						<div className='relative h-[400px] mb-4'>
							<Image
								src={`${URL}/images/${data?.photos[0]}`}
								className='rounded-lg object-contain overflow-hidden'
								alt={data?.name || ''}
								quality={70}
								fill
								sizes='(max-width: 768px) 100px, (max-width: 1200px) 250px, 400px'
							/>
						</div>
						<div className='flex -mx-2 mb-4'>
							<button className='w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700'>
								Add to Cart
							</button>
						</div>
					</div>
					<div className='md:flex-1 px-4'>
						<h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
							{data?.name}
						</h2>
						<p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
							{data?.description}
						</p>
						<div className='flex mb-4'>
							<div className='mr-4'>
								<span className='font-bold text-gray-700 dark:text-gray-300'>
									Price:
								</span>
								<span className='text-gray-600 dark:text-gray-300'>
									{data?.price}
								</span>
							</div>
							<div>
								<span className='font-bold text-gray-700 dark:text-gray-300'>
									Availability:
								</span>
								<span className='text-gray-600 dark:text-gray-300'>
									In Stock
								</span>
							</div>
						</div>

						<div>
							<span className='font-bold text-gray-700 dark:text-gray-300'>
								Product Description:
							</span>
							<p className='text-gray-600 dark:text-gray-300 text-sm mt-2'>
								{data?.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<SkeletonProductDetail />
	);
};

export default ProductDetail;
