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
		page?: string;
	};
}) {
	const selectedCategory = Number(searchParams?.selectedCategory) || 0;
	const currentPage = Number(searchParams?.page) || 1;

	return (
		<Suspense>
			<ProductGrid
				currentPage={currentPage}
				selectedCategory={selectedCategory}
			/>
		</Suspense>
	);
}
