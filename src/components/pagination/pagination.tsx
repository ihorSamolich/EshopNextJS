'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';

interface IPaginationProps {
	currentPage: number;
	pageCount: number;
	count: number;
}

const Pagination = ({ currentPage, pageCount, count }: IPaginationProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handlePageClick = (event: { selected: number }) => {
		const selectedPage = event.selected + 1;
		const params = new URLSearchParams(searchParams);
		if (selectedPage > 1) {
			params.set('page', selectedPage.toString());
		} else {
			params.delete('page');
		}

		if (selectedPage !== currentPage) {
			replace(`${pathname}?${params.toString()}`);
		}
	};

	return (
		count && (
			<ReactPaginate
				breakLabel={
					<span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>
						...
					</span>
				}
				nextLabel={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-3 h-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m8.25 4.5 7.5 7.5-7.5 7.5'
						/>
					</svg>
				}
				previousLabel={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-3 h-5'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 19.5 8.25 12l7.5-7.5'
						/>
					</svg>
				}
				onPageChange={handlePageClick}
				forcePage={currentPage - 1}
				pageRangeDisplayed={2}
				pageCount={Math.ceil(count / pageCount)}
				renderOnZeroPageCount={null}
				containerClassName='isolate inline-flex -space-x-px rounded-md shadow-sm'
				activeLinkClassName='relative z-10 inline-flex items-center border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:bg-indigo-700'
				pageLinkClassName='relative hidden items-center px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
				previousLinkClassName='relative items-center rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex'
				nextLinkClassName='relative items-center rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex'
			/>
		)
	);
};

export default Pagination;
