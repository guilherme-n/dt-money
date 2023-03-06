import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { api } from '../lib/axios';
import { Transaction } from '../types/transaction';

const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsContextType {
	transactions: Transaction[];
	fetchTransactions: (query?: string) => Promise<void>;
	createTransaction: (transaction: CreateNewTransactionParams) => Promise<void>;
}

interface CreateNewTransactionParams {
	description: string;
	price: number;
	category: string;
	type: 'income' | 'expense';
}

interface TransactionsProviderProps {
	children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		fetchTransactions();
	}, []);

	async function fetchTransactions(query?: string) {
		const { data } = await api.get('transactions', {
			params: {
				_sort: 'createdAt',
				_order: 'desc',
				q: query,
			},
		});

		setTransactions(data);
	}

	async function createTransaction(transaction: CreateNewTransactionParams) {
		const { data } = await api.post('transactions', {
			...transaction,
			createdAt: new Date(),
		});

		setTransactions((state) => [data, ...state]);
	}

	return (
		<TransactionsContext.Provider
			value={{ transactions, fetchTransactions, createTransaction }}
		>
			{children}
		</TransactionsContext.Provider>
	);
}

export const useTransactions = () => useContext(TransactionsContext);
