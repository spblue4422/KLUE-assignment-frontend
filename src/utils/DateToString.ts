export const dateToString = (date: string) => {
	if (!date) return '';

	const ymd = date.slice(0, 10);
	const hms = date.slice(11, 19);
	return ymd + ' ' + hms;
};
