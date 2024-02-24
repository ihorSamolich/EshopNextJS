'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useState } from 'react';
import { useCreateProduct } from '@/hooks/product';
import { IProductCreate } from '@/types/product.types';
import { useRouter } from 'next/navigation';
import { useCategoryNames } from '@/hooks/category';
const CreateProductPage = () => {
	const createProduct = useCreateProduct();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IProductCreate>();
	const { data } = useCategoryNames();

	const onSubmit: SubmitHandler<IProductCreate> = data => {
		createProduct.mutate(data);
		router.push('/products');
	};

	return (
		<div className='bg-white p-10'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='space-y-12'>
					<div className='border-b border-gray-900/10 pb-12'>
						<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
							<div className='col-span-full'>
								<label
									htmlFor='name'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Назва товару:
								</label>
								<div className='mt-2'>
									<input
										id='name'
										className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										type='text'
										{...register('name', { required: true })}
									/>
								</div>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='description'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Опис товару:
								</label>
								<div className='mt-2'>
									<textarea
										id='description'
										{...register('description', { required: true })}
										rows={3}
										className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='price'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Ціна товару:
								</label>
								<input
									id='price'
									type='number'
									{...register('price', { required: true })}
									className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='quantity'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									К-сть товару:
								</label>
								<input
									id='quantity'
									type='number'
									{...register('quantity', { required: true })}
									className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='categoryId'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Категорія:
								</label>
								<select
									id='categoryId'
									{...register('categoryId', { required: true })}
									className='px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									defaultValue='-1'
								>
									<option value='-1' disabled>
										Оберіть категорію:
									</option>
									{data?.map(item => (
										<option key={item.id} value={item.id}>
											{item.name}
										</option>
									))}
								</select>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='images'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Фото:
								</label>
								<input
									className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
									{...register('images', { required: true })}
									id='images'
									type='file'
									accept='image/jpeg, image/png, image/webp, image/gif'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<button
						type='button'
						className='text-sm font-semibold leading-6 text-gray-900'
						onClick={() => reset()}
					>
						Cancel
					</button>
					<button
						type='submit'
						className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Save
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateProductPage;
