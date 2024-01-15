/*
 * Anagram Detection
 * https://www.codewars.com/kata/529eef7a9194e0cbc1000255
 *
 */

var isAnagram = function (test, original) {
	return [...test.toLowerCase()].sort().join('') === [...original.toLowerCase()].sort().join('')
}
