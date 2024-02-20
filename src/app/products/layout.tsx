import React, { Suspense } from 'react';
import Filters from '@/components/filters/Filters';

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
