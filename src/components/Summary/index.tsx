import { SummaryCard, SummaryContainer } from './styles';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

export function Summary() {
	return (
		<SummaryContainer>
			<SummaryCard iconColor='green'>
				<header>
					<span>Incomes</span>
					<ArrowCircleUp size={32} />
				</header>
				<strong>$ 17,400.00</strong>
			</SummaryCard>

			<SummaryCard iconColor='red'>
				<header>
					<span>Expenses</span>
					<ArrowCircleDown size={32} />
				</header>
				<strong>$ 1,259.00</strong>
			</SummaryCard>

			<SummaryCard iconColor='white' bgColor='green'>
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} />
				</header>
				<strong>$ 16,141.00</strong>
			</SummaryCard>
		</SummaryContainer>
	);
}
