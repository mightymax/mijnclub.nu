import {differenceInYears} from 'date-fns';

const ANNIVERSARY_MOMENTS = [5, 10, 15, 20, 25, 50, 75, 84, 85, 86, 100, 135];

export const hasAnniversaryToday = (date: Date | undefined): { years: number, hasAnniversary: boolean } => {
	if (!date) {
		return {
			years: 0,
			hasAnniversary: false
		}
	}

	const yearsDifference: number = differenceInYears(new Date(), date);
	return {
		years: yearsDifference,
		hasAnniversary: ANNIVERSARY_MOMENTS.includes(yearsDifference)
	};
}
