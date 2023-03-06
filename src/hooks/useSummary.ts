import { useMemo } from 'react';
import { useTransactions } from '../contexts/TransactionsContext';

export function useSummary() {
	const { transactions } = useTransactions();

	const summary = useMemo(() => {
		return transactions.reduce(
			(acc, transaction) => {
				if (transaction.type === 'income') {
					acc.incomes += transaction.price;
					acc.total += transaction.price;
				} else {
					acc.expenses += transaction.price;
					acc.total -= transaction.price;
				}
				return acc;
			},
			{
				incomes: 0,
				expenses: 0,
				total: 0,
			}
		);
	}, [transactions]);

	return summary;
}
