/*
 * Factorial
 * https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
 *
 */

function factorial(n) {
	if (n < 0 || n > 12) throw new RangeError('Input must be between 0 and 12.')

	return n === 0 ? 1 : Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => acc * curr, 1)
}
