/*
 * Grasshopper - Terminal game combat function
 * https://www.codewars.com/kata/586c1cf4b98de0399300001d
 *
 */

function combat(health, damage) {
	return Math.max(0, health - damage)
}
