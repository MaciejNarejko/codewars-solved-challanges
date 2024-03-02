/*
 * validate code with simple regex
 * https://www.codewars.com/kata/56a25ba95df27b7743000016
 *
 */

function validateCode(code) {
	return /^[123]/.test(code)
}
