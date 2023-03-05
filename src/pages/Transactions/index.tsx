import { useTransactions } from '../../components/contexts/TransactionsContext';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
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
							return (
								<tr key={transaction.id}>
									<td>{transaction.description}</td>
									<PriceHighlight variant={transaction.type}>
										$ {transaction.price}
									</PriceHighlight>
									<td>{transaction.category}</td>
									<td>{transaction.createdAt}</td>
								</tr>
							);
						})}
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	);
}
