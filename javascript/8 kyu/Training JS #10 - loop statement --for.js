/*
 * Training JS #10: loop statement --for
 * https://www.codewars.com/kata/5721a78c283129e416000999
 *
 */

function pickIt(arr) {
	var odd = [],
		even = []
	for (let num of arr) {
		;(num % 2 === 0 ? even : odd).push(num)
	}

	return [odd, even]
}
