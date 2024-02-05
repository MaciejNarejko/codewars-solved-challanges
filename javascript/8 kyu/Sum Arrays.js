/*
 * Sum Arrays
 * https://www.codewars.com/kata/53dc54212259ed3d4f00071c
 *
 */

function sum(numbers) {
	return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
