/*
 * Sum of Multiples
 * https://www.codewars.com/kata/57241e0f440cd279b5000829
 *
 */

function sumMul(n, m) {
	if (n <= 0 || m <= n) return 'INVALID'

	const numberOfMultiples = Math.floor((m - 1) / n)
	return (n * numberOfMultiples * (numberOfMultiples + 1)) / 2
}
