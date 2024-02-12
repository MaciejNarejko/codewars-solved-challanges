/*
 * Sort the odd
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
 *
 */

function sortArray(array) {
	const sortedOdds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b)
	return array.map(num => (num % 2 === 0 ? num : sortedOdds.shift()))
}
