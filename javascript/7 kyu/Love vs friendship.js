/*
 * Love vs friendship
 * https://www.codewars.com/kata/59706036f6e5d1e22d000016
 *
 */

function wordsToMarks(string) {
	return string.split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0)
}