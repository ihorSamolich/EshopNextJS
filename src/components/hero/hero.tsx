'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const heros = [
	'/hero1.webp',
	'/hero2.webp',
	'/hero3.webp',
	'/hero1.webp',
	'/hero2.webp',
	'/hero3.webp',
];

const Hero = () => {
	return (
		<section className='overflow-hidden rounded-xl mx-auto mt-5'>
			<Swiper
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				navigation={true}
				pagination={true}
				modules={[Navigation, Pagination, Autoplay]}
			>
				{heros.map((hero, index) => (
					<SwiperSlide key={index}>
						<div className='w-full h-80 relative'>
							<Image
								className='object-cover'
								src={hero}
								priority={true}
								sizes='(max-width: 768px) 800px, (max-width: 1200px) 1000px, 1200px'
								fill
								alt='Hero image'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Hero;
