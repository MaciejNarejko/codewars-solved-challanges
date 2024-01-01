/*
 * Welcome to the City
 * https://www.codewars.com/kata/5302d846be2a9189af0001e4
 *
 * @param {string[]} name - Array of name parts to be joined
 * @param {string} city - The city to welcome the person to
 * @param {string} state - The state to welcome the person to
 * @returns {string} - A greeting string
 */

function sayHello(name, city, state) {
	return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// Test
const result = sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
const expected = 'Hello, John Smith! Welcome to Phoenix, Arizona!'

result === expected
	? console.log(`✅ Test passed!`)
	: console.log(`❌ Test failed: expected ${expected}, but got ${result}`)
