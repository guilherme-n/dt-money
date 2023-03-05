export const dateFormatter = Intl.DateTimeFormat('en-US');

export const priceFormatter = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
