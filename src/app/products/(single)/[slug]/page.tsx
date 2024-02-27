import ProductDetail from '@/components/products/detail/productDetail';

const ProductSinglePage = ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	return <ProductDetail id={parseInt(slug)} />;
};

export default ProductSinglePage;
