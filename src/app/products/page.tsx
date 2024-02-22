import ProductGrid from '@/components/products/grid/productList';
import { Suspense } from 'react';

export const metadata = {
	title: 'Products',
	description: 'ESHOP products page.',
};

export default function ProductsPage() {
	return (
		<Suspense>
			<ProductGrid />
		</Suspense>
	);
}
