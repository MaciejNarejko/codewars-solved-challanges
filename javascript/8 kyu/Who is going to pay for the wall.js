/*
 * Who is going to pay for the wall?
 * https://www.codewars.com/kata/58bf9bd943fadb2a980000a7
 *
 */

function whoIsPaying(name) {
	return name.length <= 2 ? [name] : [name, name[0] + name[1]]
}
