/*
 * Find the nth Digit of a Number
 * https://www.codewars.com/kata/577b9960df78c19bca00007e
 *
 */

function findDigit(num, nth) {
	if (nth <= 0) return -1
	const strNum = String(Math.abs(num))
	return nth > strNum.length ? 0 : +strNum[strNum.length - nth]
}
