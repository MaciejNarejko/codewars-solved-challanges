/*
 * Surface Area and Volume of a Box
 * https://www.codewars.com/kata/565f5825379664a26b00007c
 *
 */

function getSize(width, height, depth) {
	const surfaceArea = 2 * width * height + 2 * width * depth + 2 * height * depth
	const volume = width * height * depth
	return [surfaceArea, volume]
}
