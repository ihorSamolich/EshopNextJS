'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '@/components/products/card/productCard';
import { useProductsSales } from '@/hooks/product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
	const { data } = useProductsSales();

	return (
		<Swiper
			slidesPerView={1}
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
			{data?.map(item => (
				<SwiperSlide key={item.id}>
					<ProductCard {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
