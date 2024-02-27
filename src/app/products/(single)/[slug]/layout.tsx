import React, { Suspense } from 'react';

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