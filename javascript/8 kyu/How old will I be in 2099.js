/*
 * How old will I be in 2099?
 * https://www.codewars.com/kata/5761a717780f8950ce001473
 *
 */

function calculateAge(yearOfBirth, targetYear) {
	const ageDifference = targetYear - yearOfBirth
	if (ageDifference === 0) {
		return 'You were born this very year!'
	}
	const yearWord = Math.abs(ageDifference) === 1 ? 'year' : 'years'
	const ageMessage =
		ageDifference > 0
			? `You are ${ageDifference} ${yearWord} old.`
			: `You will be born in ${Math.abs(ageDifference)} ${yearWord}.`
	return ageMessage
}
