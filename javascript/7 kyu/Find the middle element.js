/*
 * Find the middle element
 * https://www.codewars.com/kata/545a4c5a61aa4c6916000755/
 *
 */

function gimme(triplet) {
	const min = Math.min(...triplet)
	const max = Math.max(...triplet)
	return triplet.findIndex(n => n !== min && n !== max)
}
