import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { api } from '../../lib/axios';
import { Transaction } from '../../types/transaction';

const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsContextType {
	transactions: Transaction[];
	fetchTransactions: (query?: string) => void;
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
			params: { q: query },
		});

		setTransactions(data);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
			{children}
		</TransactionsContext.Provider>
	);
}

export const useTransactions = () => useContext(TransactionsContext);
