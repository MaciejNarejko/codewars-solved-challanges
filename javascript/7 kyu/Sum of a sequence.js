/*
 * Sum of a sequence
 * https://www.codewars.com/kata/586f6741c66d18c22800010a
 *
 */

const sequenceSum = (begin, end, step) => {
	if (begin > end) return 0
	let sum = 0
	for (i = begin; i <= end; i += step) {
		sum += i
	}
	return sum
}
