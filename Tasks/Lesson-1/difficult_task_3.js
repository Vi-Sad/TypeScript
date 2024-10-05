// Найдите число, которое встречается два раза в массиве целых чисел.
// Если все числа встречаются 1 раз — вернуть false. (findDuplicate([1,2,3,4,5,1,6]) => 1)

function RepeatedNumber(array) {
    let repeat = []
    let unique = []
    let res
    array.map((value) => {
        unique.includes(value) ? repeat.push(value) : unique.push(value)
    })
    repeat.length === 0 ? res = false : res = Number(repeat.join(''))
    return res;
}

console.log(RepeatedNumber([1, 2, 3, 4, 5]))
console.log(RepeatedNumber([1, 2, 3, 4, 5, 1, 6]))
