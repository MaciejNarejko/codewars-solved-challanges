/*
 * Training JS #4: Basic data types--Array
 * https://www.codewars.com/kata/571effabb625ed9b0600107a
 *
 */

function getLength(arr) {
	//return length of arr
	return arr.length
}
function getFirst(arr) {
	//return the first element of arr
	return arr[0]
}
function getLast(arr) {
	//return the last element of arr
	return arr[arr.length - 1]
}
function pushElement(arr, element = 1) {
	//push el to arr
	arr.push(element)
	return arr
}
function popElement(arr) {
	//pop an element from arr
	arr.pop()
	return arr
}
