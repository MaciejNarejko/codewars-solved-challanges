/*
 * No zeros for heros
 * https://www.codewars.com/kata/570a6a46455d08ff8d001002
 *
 */

function noBoringZeros(n) {
	return n ? +String(n).replace(/0+$/, '') : 0
}
