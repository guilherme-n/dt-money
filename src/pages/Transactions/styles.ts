import styled from 'styled-components';

export const TransactionsContainer = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 4rem auto 0;
	padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0 1rem;
	/* margin-top: 1.5rem; */

	td {
		padding: 1.25rem 2rem;
		background: ${(props) => props.theme['gray-700']};

		&:first-child {
			border-top-left-radius: 6px;
			border-bottom-left-radius: 6px;
			width: 50%;
		}

		&:last-child {
			border-top-right-radius: 6px;
			border-bottom-right-radius: 6px;
		}
	}
`;

interface PriceHighlightProps {
	variant: 'income' | 'expense';
}
export const PriceHighlight = styled.td<PriceHighlightProps>`
	color: ${(props) =>
		props.variant === 'income'
			? props.theme['green-300']
			: props.theme['red-300']};
`;