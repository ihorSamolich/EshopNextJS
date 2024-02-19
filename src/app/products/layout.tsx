import React from 'react';
import Filters from '@/components/filters/Filters';

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<Filters>{children}</Filters>
		</section>
	);
}
