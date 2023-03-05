import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import {
	CloseButton,
	Content,
	Overlay,
	TransactionType,
	TransactionTypeButton,
} from './styles';

export function NewTransactionModal() {
	return (
		<Dialog.Portal>
			<Overlay />

			<Content>
				<Dialog.Title>New Transaction</Dialog.Title>

				<CloseButton>
					<X size={24} />
				</CloseButton>

				<form action=''>
					<input type='text' placeholder='Description' required />
					<input type='number' placeholder='Price' required />
					<input type='text' placeholder='Category' required />

					<TransactionType>
						<TransactionTypeButton value='income' variant='income'>
							<ArrowCircleUp size={24} />
							<span>Income</span>
						</TransactionTypeButton>

						<TransactionTypeButton value='expense' variant='expense'>
							<ArrowCircleDown size={24} />
							<span>Expense</span>
						</TransactionTypeButton>
					</TransactionType>

					<button type='submit'>Create</button>
				</form>
			</Content>
		</Dialog.Portal>
	);
}
