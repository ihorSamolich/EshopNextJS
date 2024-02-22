import ProductGrid from '@/components/products/grid/productList';
import { Suspense } from 'react';

export const metadata = {
	title: 'Products',
	description: 'ESHOP products page.',
};

export default function ProductsPage({
	searchParams,
}: {
	searchParams?: {
		selectedCategory?: string;
	};
}) {
	const selectedCategory = Number(searchParams?.selectedCategory) || 0;
	return (
		<Suspense>
			<ProductGrid selectedCategory={selectedCategory} />
		</Suspense>
	);
}
