import React from 'react';
import Link from 'next/link';

const ButtonBuy = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className='mt-10 block w-full rounded-md bg-violet-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
			{children}
		</button>
	);
};

export default ButtonBuy;
