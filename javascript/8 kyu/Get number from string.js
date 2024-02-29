/*
 * Get number from string
 * https://www.codewars.com/kata/57a37f3cbb99449513000cd8
 *
 */

function getNumberFromString(s) {
	return parseInt(s.replace(/\D/g, ''), 10)
}
