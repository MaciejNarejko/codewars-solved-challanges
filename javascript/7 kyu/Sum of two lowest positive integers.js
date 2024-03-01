/*
 * Sum of two lowest positive integers
 * https://www.codewars.com/kata/558fc85d8fd1938afb000014
 *
 */

function sumTwoSmallestNumbers(numbers) {
	const [smallest, secondSmallest] = numbers.sort((a, b) => a - b)
	return smallest + secondSmallest
}
