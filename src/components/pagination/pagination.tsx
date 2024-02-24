import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface IPaginationProps {
	currentPage: number;
	pageCount: number;
	count: number;
}

const Pagination = ({ currentPage, pageCount, count }: IPaginationProps) => {
	const totalPages = Math.ceil(count / pageCount);
	const pagesArray = Array.from(
		{ length: totalPages },
		(_, index) => index + 1,
	);

	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const pathname = usePathname();

	const onPageChange = (pageNumber: number) => {
		const params = new URLSearchParams(searchParams);
		if (pageNumber) {
			params.set('page', pageNumber.toString());
		} else {
			params.delete('page');
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<>
			<div className='flex flex-1 justify-between sm:hidden'>
				<li className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
					Previous
				</li>
				<li className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'>
					Next
				</li>
			</div>
			<div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
				<div>
					<p className='text-sm text-gray-700'>
						Showing{' '}
						<span className='font-medium'>
							{(currentPage - 1) * pageCount + 1}
						</span>{' '}
						to <span className='font-medium'>{currentPage * pageCount}</span> of{' '}
						<span className='font-medium'>{count}</span> results
					</p>
				</div>
				<div>
					<nav
						className='isolate inline-flex -space-x-px rounded-md shadow-sm'
						aria-label='Pagination'
					>
						<li className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
							<span className='sr-only'>Previous</span>
							<ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
						</li>

						{pagesArray.map(page => (
							<li
								key={page}
								className={`${
									currentPage === page
										? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
										: 'relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
								}`}
								onClick={() => onPageChange(page)}
							>
								{page}
							</li>
						))}

						<li className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
							<span className='sr-only'>Next</span>
							<ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
						</li>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Pagination;
