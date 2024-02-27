import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import Provider from '@/app/provider';

import './globals.css';

const roboto = Inter({
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Головна | ESHOP',
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
				<Provider>
					<Navbar />
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						{children}
					</div>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
