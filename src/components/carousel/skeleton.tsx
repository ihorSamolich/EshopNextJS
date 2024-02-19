import React from 'react';

const CarouselSkeleton = () => {
	return (
		<div className='animate-pulse flex space-x-4'>
			<div className='bg-slate-200 w-72 border-2 rounded-xl'>
				<div className='h-64'></div>
				<div className='h-64'></div>
				<div className='h-1'></div>
			</div>
			<div className='bg-slate-200 w-72 border-2 rounded-xl'>
				<div className='h-64'></div>
				<div className='h-64'></div>
				<div className='h-1'></div>
			</div>
			<div className='bg-slate-200 w-72 border-2 rounded-xl'>
				<div className='h-64'></div>
				<div className='h-64'></div>
				<div className='h-1'></div>
			</div>
			<div className='bg-slate-200 w-72 border-2 rounded-xl'>
				<div className='h-64'></div>
				<div className='h-64'></div>
				<div className='h-1'></div>
			</div>
		</div>
	);
};

export default CarouselSkeleton;
