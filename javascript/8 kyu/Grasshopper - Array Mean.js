/*
 * Grasshopper - Array Mean
 * https://www.codewars.com/kata/55d277882e139d0b6000005d
 *
 */

var findAverage = function (nums) {
	return nums.length === 0
		? 0
		: nums.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / nums.length
}
