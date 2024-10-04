// Принимает строку и возвращает количество гласных букв в этой строке

function VowelLetters(str) {
    let vowel_letters = 'aeiuyoаоуыэеёиюя'
    let count_vowel_letters = 0
    for (let i of str) {
        if (vowel_letters.includes(i)) {
            count_vowel_letters += 1
        }
    }
    return count_vowel_letters;
}

console.log(VowelLetters('Hello!'))
console.log(VowelLetters('Как дела?'))
