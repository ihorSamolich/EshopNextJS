import React from 'react';
const CreateProductPage = () => {
	return (
		<div className='bg-white p-10'>
			<form>
				<div className='space-y-12'>
					<div className='border-b border-gray-900/10 pb-12'>
						<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
							<div className='col-span-full'>
								<label
									htmlFor='name'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Name
								</label>
								<div className='mt-2'>
									<input
										type='text'
										name='name'
										id='name'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='description'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Description
								</label>
								<div className='mt-2'>
									<textarea
										id='description'
										name='description'
										rows={3}
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										defaultValue={''}
									/>
								</div>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='price'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Price
								</label>
								<input
									type='number'
									id='price'
									name='price'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									placeholder='90210'
									required
								/>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='quantity'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Quantity
								</label>
								<input
									type='number'
									id='quantity'
									name='quantity'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									placeholder='90210'
									required
								/>
							</div>

							<div className='col-span-full'>
								<label
									htmlFor='categoryId'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									CategoryId
								</label>
								<input
									type='number'
									id='categoryId'
									name='categoryId'
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
									placeholder='90210'
									required
								/>
							</div>

							{/*<div className='col-span-full'>*/}
							{/*	<label*/}
							{/*		htmlFor='images'*/}
							{/*		className='block text-sm font-medium leading-6 text-gray-900'*/}
							{/*	>*/}
							{/*		Images*/}
							{/*	</label>*/}
							{/*	<div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>*/}
							{/*		<div className='text-center'>*/}
							{/*			<PhotoIcon*/}
							{/*				className='mx-auto h-12 w-12 text-gray-300'*/}
							{/*				aria-hidden='true'*/}
							{/*			/>*/}
							{/*			<div className='mt-4 flex text-sm leading-6 text-gray-600'>*/}
							{/*				<label*/}
							{/*					htmlFor='images'*/}
							{/*					className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'*/}
							{/*				>*/}
							{/*					<span>Upload a file</span>*/}
							{/*					<input*/}
							{/*						id='images'*/}
							{/*						name='images[]'*/}
							{/*						type='file'*/}
							{/*						className='sr-only'*/}
							{/*					/>*/}
							{/*				</label>*/}
							{/*				<p className='pl-1'>or drag and drop</p>*/}
							{/*			</div>*/}
							{/*			<p className='text-xs leading-5 text-gray-600'>*/}
							{/*				PNG, JPG, GIF up to 10MB*/}
							{/*			</p>*/}
							{/*		</div>*/}
							{/*	</div>*/}
							{/*</div>*/}
						</div>
					</div>
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<button
						type='button'
						className='text-sm font-semibold leading-6 text-gray-900'
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
