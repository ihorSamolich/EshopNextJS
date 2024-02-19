'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '@/components/products/card/productCard';

import { IProduct } from '@/types/product.types';

interface ICarouselProps {
	products: IProduct[];
}

const Carousel = ({ products }: ICarouselProps) => {
	return (
		<Swiper
			slidesPerView={4}
			breakpoints={{
				480: { slidesPerView: 2 },
				740: { slidesPerView: 3 },
				1200: { slidesPerView: 4 },
			}}
			className='w-full rounded-lg sm:p-50'
			loop={true}
			spaceBetween={10}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
		>
			{products.map(item => (
				<SwiperSlide key={item.id}>
					<ProductCard {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
