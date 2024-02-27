import ProductDetail from '@/components/products/detail/productDetail';
import { Suspense } from 'react';
const URL = process.env.NEXT_PUBLIC_BASE_URL;

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}) => {
	const { slug } = params;
	const product = await fetch(`${URL}/api/products/${parseInt(slug)}`).then(
		res => res.json(),
	);

	return {
		title: product.name,
		description: 'ESHOP products page.',
	};
};

const ProductSinglePage = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	return (
		<section>
			<Suspense>
				<ProductDetail id={parseInt(params.slug)} />
			</Suspense>
		</section>
	);
};

export default ProductSinglePage;
