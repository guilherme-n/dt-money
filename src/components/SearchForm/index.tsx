import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransactions } from '../contexts/TransactionsContext';

const searchFormSchema = zod.object({
	query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SearchFormInputs>({
		resolver: zodResolver(searchFormSchema),
	});

	const { fetchTransactions } = useTransactions();

	const handleSearchTransactions = async (data: SearchFormInputs) => {
		fetchTransactions(data.query);
	};

	return (
		<SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
			<input placeholder='Search for a transaction' {...register('query')} />
			<button disabled={isSubmitting}>
				<MagnifyingGlass size={20} />
				<span>search</span>
			</button>
		</SearchFormContainer>
	);
}
