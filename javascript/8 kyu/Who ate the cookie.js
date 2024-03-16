/*
 * Who ate the cookie?
 * https://www.codewars.com/kata/55a996e0e8520afab9000055
 *
 */

function cookie(x) {
	const messages = {
		string: 'Zach',
		number: 'Monica',
	}

	return `Who ate the last cookie? It was ${messages[typeof x] || 'the dog'}!`
}
