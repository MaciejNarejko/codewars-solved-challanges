/*
 * Sum of numbers from 0 to N
 * https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763
 *
 */

var SequenceSum = (function () {
	function SequenceSum() {}

	SequenceSum.showSequence = function (count) {
		if (count < 0) return `${count}<0`
		if (count === 0) return '0=0'

		const sum = (count * (count + 1)) / 2
		const series = Array.from({ length: count + 1 }, (_, i) => i)
		return `${series.join('+')} = ${sum}`
	}

	return SequenceSum
})()
