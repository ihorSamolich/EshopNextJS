'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { categoryService } from '@/services/category.service';
import { ICategoryName } from '@/types/category.types';

export function useCategoryNames() {
	return useQuery({
		queryKey: ['category-names'],
		queryFn: () => categoryService.getCategoryNames(),
		staleTime: Infinity,
	});
}
