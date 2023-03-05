import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { Transaction } from '../../types/transaction';

const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsContextType {
	transactions: Transaction[];
	setTransactions: Dispatch<SetStateAction<Transaction[]>>;
}

interface TransactionsProviderProps {
	children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		getTransactions();
	}, []);

	const getTransactions = async () => {
		const response = await fetch('http://localhost:3333/transactions');
		const data = await response.json();
		setTransactions(data);
	};

	return (
		<TransactionsContext.Provider value={{ transactions, setTransactions }}>
			{children}
		</TransactionsContext.Provider>
	);
}

export const useTransactions = () => useContext(TransactionsContext);
