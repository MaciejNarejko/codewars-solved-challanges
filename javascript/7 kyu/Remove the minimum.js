/*
 * Remove the minimum
 * https://www.codewars.com/kata/563cf89eb4747c5fb100001b
 *
 */

function removeSmallest(numbers) {
	let smallestIndex = 0
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < numbers[smallestIndex]) smallestIndex = i
	}
	return numbers.filter((_, i) => i !== smallestIndex)
}
