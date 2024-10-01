/*
 * Power
 * https://www.codewars.com/kata/562926c855ca9fdc4800005b
 *
 */

function numberToPower(number, power) {
	return power === 0 ? 1 : number * numberToPower(number, power - 1)
}
