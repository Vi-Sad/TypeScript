// Принимает две строки и возвращает true, если одна строка является анаграммой другой
// (имеют одинаковые символы, но в разном порядке)

function TwoString(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

console.log(TwoString('акробат', 'работка'))