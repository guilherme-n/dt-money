import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useTransactions } from '../contexts/TransactionsContext';

export function Summary() {
	const { transactions } = useTransactions();

	const summary = transactions.reduce(
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

	return (
		<SummaryContainer>
			<SummaryCard iconColor='green'>
				<header>
					<span>Incomes</span>
					<ArrowCircleUp size={32} />
				</header>
				<strong>$ {summary.incomes}</strong>
			</SummaryCard>

			<SummaryCard iconColor='red'>
				<header>
					<span>Expenses</span>
					<ArrowCircleDown size={32} />
				</header>
				<strong>$ {summary.expenses}</strong>
			</SummaryCard>

			<SummaryCard iconColor='white' bgColor='green'>
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} />
				</header>
				<strong>$ {summary.total}</strong>
			</SummaryCard>
		</SummaryContainer>
	);
}
