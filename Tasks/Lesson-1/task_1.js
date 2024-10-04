// Принимает строку и возвращает обратную ей строку

function ReverseString(str) {
    return str.split('').reverse().join('');
}

console.log(ReverseString('Hello!'))