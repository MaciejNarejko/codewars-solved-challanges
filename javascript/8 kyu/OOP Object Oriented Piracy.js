/*
 * OOP: Object Oriented Piracy
 * https://www.codewars.com/kata/54fe05c4762e2e3047000add
 *
 */

class Ship {
	constructor(draft, crew) {
		this.draft = draft
		this.crew = crew
	}

	isWorthIt() {
		return this.draft - this.crew * 1.5 > 20
	}
}
