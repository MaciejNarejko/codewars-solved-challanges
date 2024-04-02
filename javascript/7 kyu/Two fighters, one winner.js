/*
 * Two fighters, one winner.
 * https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
 *
 */

function declareWinner(fighter1, fighter2, firstAttacker) {
	const turnsFighter1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
	const turnsFighter2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
	if (turnsFighter1 < turnsFighter2) {
		return fighter2.name
	} else if (turnsFighter2 < turnsFighter1) {
		return fighter1.name
	} else {
		return firstAttacker
	}
}
