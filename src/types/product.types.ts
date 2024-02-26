export interface IProduct {
	id: number;
	name: string;
	price: number;
	discount: number;
	photos: string[];
}

export interface IProductDetail extends IProduct {
	description: string;
}

export interface IProductCreate {
	name: string;
	description: string;
	price: number;
	discount: number;
	quantity: number;
	categoryId: number;
	images: File[];
}

export interface IProductResponse {
	count: number;
	items: IProduct[];
}
