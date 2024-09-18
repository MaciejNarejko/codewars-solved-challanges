/*
 * esreveR
 * https://www.codewars.com/kata/5413759479ba273f8100003d
 *
 */

reverse = function (array) {
	let left = 0
	let right = array.length - 1
	while (left < right) {
		;[array[left], array[right]] = [array[right], array[left]]
		left++
		right--
	}
	return array
}
