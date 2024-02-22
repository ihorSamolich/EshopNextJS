import HotSales from '@/components/hotSales/hotSales';
import Hero from '@/components/hero/hero';
import { Suspense } from 'react';

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Suspense>
				<HotSales />
			</Suspense>
		</main>
	);
}
