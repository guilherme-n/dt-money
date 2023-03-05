import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useTransactions } from '../contexts/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';

export function Summary() {
	const { transactions } = useTransactions();

	const { incomes, expenses, total } = transactions.reduce(
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
				<strong>{priceFormatter.format(incomes)}</strong>
			</SummaryCard>

			<SummaryCard iconColor='red'>
				<header>
					<span>Expenses</span>
					<ArrowCircleDown size={32} />
				</header>
				<strong>{priceFormatter.format(expenses)}</strong>
			</SummaryCard>

			<SummaryCard iconColor='white' bgColor='green'>
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} />
				</header>
				<strong>{priceFormatter.format(total)}</strong>
			</SummaryCard>
		</SummaryContainer>
	);
}
