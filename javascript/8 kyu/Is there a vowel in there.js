/*
 * Is there a vowel in there?
 * https://www.codewars.com/kata/57cff961eca260b71900008f
 *
 */

const vowelMap = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
};

function isVow(a) {
    return a.map(num => vowelMap[num] || num);
}