import styled from 'styled-components';

export const SummaryContainer = styled.section`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: 0 1.5rem;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	margin-top: -5rem;
`;

interface SummaryCardProps {
	iconColor: 'green' | 'red' | 'white';
	bgColor?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
	background-color: ${(props) =>
		props.bgColor === 'green'
			? props.theme['green-700']
			: props.theme['gray-600']};
	border-radius: 6px;
	padding: 2rem;

	header {
		display: flex;
		justify-content: space-between;
		color: ${(props) => props.theme['gray-300']};
	}

	strong {
		display: block;
		margin-top: 1rem;
		font-size: 2rem;
	}

	svg {
		color: ${(props) => {
			switch (props.iconColor) {
				case 'green':
					return props.theme['green-300'];
				case 'red':
					return props.theme['red-300'];
				case 'white':
					return props.theme.white;
			}
		}};
	}
`;
