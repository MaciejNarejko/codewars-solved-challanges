/*
 * Tip Calculator
 * https://www.codewars.com/kata/56598d8076ee7a0759000087
 *
 */

const tips = {
	terrible: 0,
	poor: 0.05,
	good: 0.1,
	great: 0.15,
	excellent: 0.2,
}

function calculateTip(amount, rating) {
	const lowerCaseRating = rating.toLowerCase()

	if (tips.hasOwnProperty(lowerCaseRating)) {
		return Math.ceil(amount * tips[lowerCaseRating])
	} else {
		return 'Rating not recognised'
	}
}
