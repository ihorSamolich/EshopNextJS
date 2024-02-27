import React from 'react';

const SkeletonProductDetail = () => {
	return (
		<div className='bg-white mx-auto pt-12 px-4 sm:px-6 lg:px-8 animate-pulse'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row -mx-4'>
					<div className='md:flex-1 px-4'>
						<div className='relative h-[400px] mb-4'>
							<div className='h-full w-full bg-gray-200 rounded-lg'></div>
						</div>
						<div className='flex -mx-2 mb-4'>
							<button className='w-full bg-gray-200 py-2 px-4 rounded-full font-bold'></button>
						</div>
					</div>
					<div className='md:flex-1 px-4'>
						<div className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
							<div className='h-8 bg-gray-200 rounded w-1/2'></div>
						</div>
						<div className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
							<div className='h-4 bg-gray-200 rounded w-full mb-2'></div>
							<div className='h-4 bg-gray-200 rounded w-3/4'></div>
						</div>
						<div className='flex mb-4'>
							<div className='mr-4'>
								<span className='font-bold text-gray-700 dark:text-gray-300'></span>
								<span className='text-gray-600 dark:text-gray-300'>
									<div className='h-4 bg-gray-200 rounded w-1/4'></div>
								</span>
							</div>
							<div>
								<span className='font-bold text-gray-700 dark:text-gray-300'></span>
								<span className='text-gray-600 dark:text-gray-300'>
									<div className='h-4 bg-gray-200 rounded w-1/4'></div>
								</span>
							</div>
						</div>

						<div>
							<span className='font-bold text-gray-700 dark:text-gray-300'></span>
							<div className='text-gray-600 dark:text-gray-300 text-sm mt-2'>
								<div className='h-4 bg-gray-200 rounded w-full mb-2'></div>
								<div className='h-4 bg-gray-200 rounded w-3/4'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkeletonProductDetail;
