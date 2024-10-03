/*
 * max diff - easy
 * https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
 *
 */

function maxDiff(list) {
	if (list.length <= 1) return 0
	let [minVal, maxVal] = [list[0], list[0]]

	for (let i = 1; i < list.length; i++) {
		minVal = Math.min(minVal, list[i])
		maxVal = Math.max(maxVal, list[i])
	}
	return maxVal - minVal
}
