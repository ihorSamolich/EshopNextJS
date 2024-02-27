import React, { Suspense } from 'react';
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

export default function ProductLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<Suspense>{children}</Suspense>
		</section>
	);
}
