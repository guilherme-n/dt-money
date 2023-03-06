import { useTransactions } from '../../contexts/TransactionsContext';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import {
	PriceHighlight,
	TransactionsContainer,
	TransactionsTable,
} from './styles';

export function Transactions() {
	const { transactions } = useTransactions();

	return (
		<div>
			<Header />
			<Summary />
			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<thead></thead>
					<tbody>
						{transactions.map((transaction) => {
							const { id, description, type, price, category, createdAt } =
								transaction;

							return (
								<tr key={id}>
									<td>{description}</td>
									<PriceHighlight variant={type}>
										{type === 'expense' && '- '}
										{priceFormatter.format(price)}
									</PriceHighlight>
									<td>{category}</td>
									<td>{dateFormatter.format(new Date(createdAt))}</td>
								</tr>
							);
						})}
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	);
}
