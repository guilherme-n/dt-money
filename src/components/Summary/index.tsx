import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
	const { incomes, expenses, total } = useSummary();

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
