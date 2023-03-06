import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import {
	CloseButton,
	Content,
	Overlay,
	TransactionType,
	TransactionTypeButton,
} from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransactions } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = zod.object({
	description: zod.string(),
	price: zod.number(),
	category: zod.string(),
	type: zod.enum(['income', 'expense']),
});

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
	const {
		control,
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<NewTransactionFormInputs>({
		resolver: zodResolver(newTransactionFormSchema),
		defaultValues: {
			type: 'income',
		},
	});

	const { createTransaction } = useTransactions();

	async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
		await createTransaction(data);
		reset();
	}

	return (
		<Dialog.Portal>
			<Overlay />

			<Content>
				<Dialog.Title>New Transaction</Dialog.Title>

				<CloseButton>
					<X size={24} />
				</CloseButton>

				<form onSubmit={handleSubmit(handleCreateNewTransaction)}>
					<input
						placeholder='Description'
						required
						{...register('description')}
					/>
					<input
						type='number'
						placeholder='Price'
						required
						{...register('price', { valueAsNumber: true })}
					/>
					<input placeholder='Category' required {...register('category')} />
					<Controller
						name='type'
						control={control}
						render={({ field }) => (
							<TransactionType
								onValueChange={field.onChange}
								value={field.value}
							>
								<TransactionTypeButton value='income' variant='income'>
									<ArrowCircleUp size={24} />
									<span>Income</span>
								</TransactionTypeButton>

								<TransactionTypeButton value='expense' variant='expense'>
									<ArrowCircleDown size={24} />
									<span>Expense</span>
								</TransactionTypeButton>
							</TransactionType>
						)}
					/>

					<button type='submit' disabled={isSubmitting}>
						Create
					</button>
				</form>
			</Content>
		</Dialog.Portal>
	);
}
