import React from 'react';
import { IProduct } from '@/types/product.types';
import Image from 'next/image';
import ButtonBuy from '@/components/ui/buttonBuy/buttonBuy';

const ProductCard = ({ name, price, discount, photos }: IProduct) => {
	return (
		<div className='min-h-full w-72 sm:w-auto sm:max-w-72 group relative p-5 rounded-xl border-2 border-violet-200 '>
			<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 h-40 lg:h-80'>
				<div className='relative w-full h-full'>
					<Image
						src={`https://ihor.fun/images/${photos[0]}`}
						alt={name}
						quality={70}
						className='h-full w-full object-contain object-center lg:h-full lg:w-full p-5'
						fill
						sizes='(max-width: 768px) 50px, (max-width: 1200px) 150px, 200px'
					/>
				</div>
			</div>

			<div className='flex flex-col gap-2 text-sm'>
				<h3 className='text-base text-gray-500 hover:text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis'>
					{name}
				</h3>

				<div className='flex gap-5 align-middle'>
					{discount > 0 ? (
						<>
							<p className='tracking-wider text-gray-500 line-through'>
								{(price / (1 - discount / 100)).toFixed(2)} ₴
							</p>
							<p className='bg-red-500 rounded-xl px-1 font-medium text-white'>
								-{discount}%
							</p>
						</>
					) : (
						<p>&nbsp;</p>
					)}
				</div>

				<p className='text-lg font-bold tracking-wide text-gray-900'>
					{price.toFixed(2)} ₴
				</p>
			</div>

			<ButtonBuy>Купити</ButtonBuy>
		</div>
	);
};

export default ProductCard;
