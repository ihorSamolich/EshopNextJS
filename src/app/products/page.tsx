import ProductGrid from '@/components/products/grid/productList';
import { productService } from '@/services/product.service';

export const metadata = {
	title: 'Products',
	description: 'ESHOP products page.',
};

export default async function Products({
	searchParams,
}: {
	searchParams?: {
		selectedCategory?: string;
	};
}) {
	const selectedCategory = searchParams?.selectedCategory || '';
	const products = await productService.getProducts(selectedCategory);

	return <ProductGrid products={products} />;
}
