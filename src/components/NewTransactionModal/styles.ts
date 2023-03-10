import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
	min-width: 32rem;
	border-radius: 6px;
	padding: 2.5rem 3rem;
	background: ${(props) => props.theme['gray-800']};

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	form {
		margin-top: 2rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		input {
			border-radius: 6px;
			border: 0;
			background: ${(props) => props.theme['gray-900']};
			color: ${(props) => props.theme['gray-300']};
			padding: 1rem;

			&::placeholder {
				color: ${(props) => props.theme['gray-500']};
			}
		}

		button[type='submit'] {
			border: 0;
			padding: 1rem 2rem;
			background-color: ${(props) => props.theme['green-500']};
			color: ${(props) => props.theme.white};
			font-weight: bold;
			border-radius: 6px;
			margin-top: 1.5rem;
			cursor: pointer;
			transition: background-color 0.2s;

			&:not(:disabled):hover {
				background: ${(props) => props.theme['green-700']};
			}

			:disabled {
				opacity: 0.6s;
				cursor: not-allowed;
			}
		}
	}
`;

export const CloseButton = styled(Dialog.Close)`
	position: absolute;
	background: transparent;
	border: 0;
	top: 1.5rem;
	right: 1.5rem;
	line-height: 0;

	cursor: pointer;

	color: ${(props) => props.theme['gray-500']};
`;

export const TransactionType = styled(RadioGroup.Root)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
	variant: 'income' | 'expense';
}

export const TransactionTypeButton = styled(
	RadioGroup.Item
)<TransactionTypeButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	border: 0;
	border-radius: 6px;
	padding: 1rem;

	background-color: ${(props) => props.theme['gray-700']};
	color: ${(props) => props.theme['gray-300']};

	&[data-state='unchecked']:hover {
		background-color: ${(props) => props.theme['gray-600']};
		transition: background-color 0.2s;
	}

	&[data-state='checked'] {
		color: ${(props) => props.theme.white};
		background-color: ${(props) =>
			props.variant === 'income'
				? props.theme['green-300']
				: props.theme['red-300']};

		svg {
			color: ${(props) => props.theme.white};
		}
	}

	svg {
		color: ${(props) =>
			props.variant === 'income'
				? props.theme['green-300']
				: props.theme['red-300']};
	}
	cursor: pointer;
`;
