import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './styles';

export function SearchForm() {
	return (
		<SearchFormContainer>
			<input placeholder='Search for a transaction' />
			<button>
				<MagnifyingGlass size={20} />
				<span>search</span>
			</button>
		</SearchFormContainer>
	);
}
