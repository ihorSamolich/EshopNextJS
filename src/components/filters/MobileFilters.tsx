'use client';
import React, { useState } from 'react';
import { Fragment } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { ICategoryName } from '@/types/category.types';

interface IMobileFiltersProps {
	categoryNames: ICategoryName[];
	filtersOpen: boolean;
	setFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileFilters = ({
	categoryNames,
	filtersOpen,
	setFiltersOpen,
}: IMobileFiltersProps) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, name, checked, value } = e.target;

		handleSearch(value);
	};

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

	return (
		<Transition.Root show={filtersOpen} as={Fragment}>
			<Dialog
				as='div'
				className='relative z-40 lg:hidden'
				onClose={setFiltersOpen}
			>
				<Transition.Child
					as={Fragment}
					enter='transition-opacity ease-linear duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity ease-linear duration-300'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black bg-opacity-25' />
				</Transition.Child>

				<div className='fixed inset-0 z-40 flex'>
					<Transition.Child
						as={Fragment}
						enter='transition ease-in-out duration-300 transform'
						enterFrom='translate-x-full'
						enterTo='translate-x-0'
						leave='transition ease-in-out duration-300 transform'
						leaveFrom='translate-x-0'
						leaveTo='translate-x-full'
					>
						<Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
							<div className='flex items-center justify-between px-4 mb-4'>
								<h2 className='text-lg font-medium text-gray-900'>Filters</h2>
								<button
									type='button'
									className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
									onClick={() => setFiltersOpen(false)}
								>
									<span className='sr-only'>Close menu</span>
									<XMarkIcon className='h-6 w-6' aria-hidden='true' />
								</button>
							</div>
							<form>
								<Disclosure
									as='div'
									key={'category'}
									className='border-b border-t border-gray-200 p-4'
								>
									{({ open }) => (
										<>
											<h3 className='-my-3 flow-root'>
												<Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
													<span className='font-medium text-gray-900'>
														{'Категорія'}
													</span>
													<span className='ml-6 flex items-center'>
														{open ? (
															<MinusIcon
																className='h-5 w-5'
																aria-hidden='true'
															/>
														) : (
															<PlusIcon
																className='h-5 w-5'
																aria-hidden='true'
															/>
														)}
													</span>
												</Disclosure.Button>
											</h3>
											<Disclosure.Panel className='pt-6'>
												<div className='space-y-4'>
													{categoryNames.map(item => (
														<div
															key={item.id}
															className='flex items-center mb-4'
														>
															<input
																id={`category-${item.id}`}
																type='radio'
																value={item.id}
																name='category'
																checked={
																	searchParams
																		.get('selectedCategory')
																		?.toString() === item.id.toString()
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
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

export default MobileFilters;
