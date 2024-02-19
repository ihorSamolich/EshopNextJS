import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Provider from '@/app/provider';

const roboto = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Home | ESHOP',
		template: '%s | ESHOP',
	},
	description: 'ESHOP main page.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<Navbar />
				<Provider>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						{children}
					</div>
				</Provider>
				<Footer />
			</body>
		</html>
	);
}
