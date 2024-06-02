export function formatDate(timestamp: number) {
	const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
	const formatter = new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit'
	});
	return formatter.format(date);
}