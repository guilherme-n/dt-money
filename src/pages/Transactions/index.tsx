import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';
import {
	PriceHighlight,
	TransactionsContainer,
	TransactionsTable,
} from './styles';

export function Transactions() {
	return (
		<div>
			<Header />
			<Summary />

			<TransactionsContainer>
				<SearchForm />
				<TransactionsTable>
					<thead></thead>
					<tbody>
						<tr>
							<td>Software development</td>
							<PriceHighlight variant='income'>$ 4,000.00</PriceHighlight>
							<td>Sell</td>
							<td>13/02/2023</td>
						</tr>
						<tr>
							<td>Snacks</td>
							<PriceHighlight variant='expense'>- $ 15.00</PriceHighlight>
							<td>Food</td>
							<td>11/02/2023</td>
						</tr>
					</tbody>
				</TransactionsTable>
			</TransactionsContainer>
		</div>
	);
}
