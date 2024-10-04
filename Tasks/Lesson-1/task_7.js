// Принимает две строки и возвращает true, если одна строка является анаграммой другой
// (имеют одинаковые символы, но в разном порядке)

function TwoString(str1, str2) {
    return str1.toUpperCase() === str2.split('').reverse().join('').toUpperCase();
}

console.log(TwoString('hello', 'olleH'))