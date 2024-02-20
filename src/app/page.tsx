import HotSales from '@/components/hotSales/hotSales';
import Hero from '@/components/hero/hero';
import { Suspense } from 'react';

export default async function HomePage() {
	return (
		<main>
			<Suspense>
				<Hero />
				<HotSales />
			</Suspense>
		</main>
	);
}
