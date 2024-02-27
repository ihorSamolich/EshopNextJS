import React, { Suspense } from 'react';
import Filters from '@/components/filters/Filters';
export const metadata = {
	title: 'Продукти',
	description: 'ESHOP products page.',
};

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<Suspense>
				<Filters>{children}</Filters>
			</Suspense>
		</section>
	);
}
