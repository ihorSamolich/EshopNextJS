'use client';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ICategoryName } from '@/types/category.types';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface IFiltersDesktopProps {
	categoryNames: ICategoryName[];
}

const FiltersDesktop = ({ categoryNames }: IFiltersDesktopProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handleSearch(value: string) {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set('selectedCategory', value);
			params.delete('page');
		} else {
			params.delete('selectedCategory');
		}

		replace(`${pathname}?${params.toString()}`);
	}

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, name, checked, value } = e.target;

		handleSearch(value);
	};

	return (
		<form className='hidden lg:block'>
			<Disclosure
				as='div'
				key={'category'}
				className='border-b border-gray-200 pb-6'
			>
				{({ open }) => (
					<>
						<h3 className='-my-3 flow-root'>
							<Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
								<span className='font-medium text-gray-900'>{'Категорія'}</span>
								<span className='ml-6 flex items-center'>
									{open ? (
										<MinusIcon className='h-5 w-5' aria-hidden='true' />
									) : (
										<PlusIcon className='h-5 w-5' aria-hidden='true' />
									)}
								</span>
							</Disclosure.Button>
						</h3>
						<Disclosure.Panel className='pt-6'>
							<div className='space-y-4'>
								{categoryNames.map(item => (
									<div key={item.id} className='flex items-center mb-4'>
										<input
											id={`category-${item.id}`}
											type='radio'
											value={item.id}
											name='category'
											checked={
												searchParams.get('selectedCategory')?.toString() ===
												item.id.toString()
											}
											onChange={handleFilter}
											className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
										/>
										<label
											htmlFor={`category-${item.id}`}
											className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
										>
											{item.name}
										</label>
									</div>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</form>
	);
};
export default FiltersDesktop;
