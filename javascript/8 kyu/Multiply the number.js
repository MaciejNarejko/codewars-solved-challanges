/*
 * Multiply the number
 * https://www.codewars.com/kata/5708f682c69b48047b000e07
 *
 */

function multiply(number) {
	return number * 5 ** Math.abs(number).toString().length
}
