export interface Transaction {
	id: number;
	description: string;
	type: 'income' | 'expense';
	category: string;
	price: number;
	createdAt: string;
}
