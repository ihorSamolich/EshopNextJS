export interface IProduct {
	id: number;
	name: string;
	price: number;
	discount: number;
	photos: string[];
}

export interface IProductResponse {
	count: number;
	items: IProduct[];
}
